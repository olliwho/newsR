import React, {Fragment} from "react";
import {Group} from "./Group";
import {ThreadDetail} from "../article/ThreadDetail";
import {SidebarContent} from "../template/SidebarContent";
import {Server} from "../server/Server";
import {Link, Redirect, Route, RouteComponentProps, Switch} from "react-router-dom"
import Media from "react-media";
import {LARGE_SCREEN_QUERY, SMALL_SCREEN_QUERY} from "../template/Constants";
import {getSubscribedGroups} from "../localStorage/localStorage";
import {Loading} from "../template/Loading";
import {Article} from "../article/Article";
import {List} from "../template/List";
import {Table, TableColumn} from "../template/Table";
import {Helmet} from "react-helmet";
import {addReadArticle, getReadArticles} from "../localStorage/localStorage";
import {Button, Header} from "../template/Header";
import {Footer} from "../template/Footer";
export type ArticleId = string;

interface State {
  loading: boolean;
  group: Group | null;
  groups: Group[];
  subscribedGroupsName: string[];
  threads: Article[];
  readArticles: string[];
  filteredThreads: Article[];
  activeArticle: ArticleId;
  sortColumn: string;
  ascending: boolean;
}

export interface GroupRouteParams {
  name: string;
}



export class GroupDetail extends React.Component<RouteComponentProps<GroupRouteParams>, State> {

  state: Readonly<State> = {
    loading: true,
    group: null,
    groups: [],
    subscribedGroupsName: [],
    threads: [],
    filteredThreads: [],
    readArticles: [],
    activeArticle: "",
    sortColumn: "",
    ascending: true
  };

  async componentDidMount(): Promise<void> {
    const nntpUrl = localStorage.getItem("nntpUrl");
    const nntpPortStr = localStorage.getItem("nntpPort");
    if (!nntpUrl || !nntpPortStr) {
      return;
    }
    const server = await Server.instance();
    const groups = await server.groups();
    const subscribedGroupsName = getSubscribedGroups();
    const group = await server.getGroupByName(this.props.match.params.name);
    if (group === null) {
      this.setState({
        loading: false,
        group: null,
        groups,
        subscribedGroupsName,
      });
      return;
    }
    const threads = await group.threads();
    const readArticles = getReadArticles(group.name);

    const sortOrder = localStorage.getItem("ascending");
    const ascending =  sortOrder ? JSON.parse(sortOrder) : true;
    const sortColumn = localStorage.getItem("sortColumn") || "";

    this.setState({loading: false, group, groups, subscribedGroupsName, threads, readArticles, filteredThreads: threads, sortColumn, ascending});
  }

  render() {
    const nntpUrl = localStorage.getItem("nntpUrl");
    const nntpPortStr = localStorage.getItem("nntpPort");
    if (!nntpUrl || !nntpPortStr) {
      return <Redirect to={"/settings"}/>;
    }

    const {match} = this.props;
    const {group, loading, threads, filteredThreads} = this.state;

    const filter = (text: string) => {
      const filteredThreads = threads.filter(
        (article) => article.subject.toLowerCase().includes(text) || article.author.name.toLowerCase().includes(text)
      );
      this.setState({filteredThreads})
    };

    const articleTableData = group === null
      ? []
      : filteredThreads.map(article => ({
        bold: !this.state.readArticles.find(a => a === article.id),
        class: this.state.activeArticle === article.id ? "active-article" : "",
        url: `${match.url}/${article.number}`,
        onPress: () => {
          addReadArticle(group.name, article.id);
          this.setState({readArticles: this.state.readArticles.concat(article.id), activeArticle: article.id})
        },
        referenceObject: article
      }));

      const articleListData = group === null
        ? []
        : filteredThreads.map(article => ({
          title: article.subject,
          subtitle: `${article.author.name} - ${article.date.format('DD.MM.YY HH:mm')}  ${article.hasattachment} `,
          url: `${match.url}/${article.number}`,
          bold: !this.state.readArticles.find(a => a === article.id),
          onPress: () => {
            addReadArticle(group.name, article.id);
            this.setState({readArticles: this.state.readArticles.concat(article.id)})
          }
        }));

    const buttons1: Button[] = [
          {
            name: "Write",
            icon: "pencil-alt",
            url: group === null ? "" : `/post/${group.name}`
          },
          {
            name: "Startpage",
            icon: "home",
            url: "/"
          }
    ];
    const buttons2: Button[] = [
          {
            name: "Write",
            icon: "pencil-alt",
            url: group === null ? "" : `/post/${group.name}`
          },
          {
            name: "Back",
            icon: "arrow-left",
            url: group === null ? "" : `/groups/${group.name}`
          },
          {
            name: "Startpage",
            icon: "home",
            url: "/"
          }
    ];


    const groupName = group === null ? match.params.name : group.name;
    const headerWithSearch = <Header name={groupName} searchBar={{filter}} url={match.url} buttons={buttons1}/>;
    const headerWithoutSearch = <Header name={groupName} url={match.url} buttons={buttons2}/>;

    const isGroupSubscribed = (groupName: string) => {
        return this.state.subscribedGroupsName.includes(groupName);
    };

    const getGroups = (isSubscription?: boolean): Group[] => {
        return this.state.groups.filter(curgroup => isGroupSubscribed(curgroup.name));
    };

    return (
      <div className="app-grid">
        <Helmet>
          <title>newsR - {groupName}</title>
        </Helmet>
        <Switch>
          <Route path={`${match.path}/:number`}>
            <Media queries={{small: SMALL_SCREEN_QUERY, large: LARGE_SCREEN_QUERY}}>
              {matches => (
                <Fragment>
                  {matches.small && headerWithoutSearch}
                  {matches.large && headerWithSearch}
                </Fragment>
              )}
            </Media>
          </Route>
          <Route path={`${match.path}`}>
            {headerWithSearch}
          </Route>
        </Switch>
        <div className="app-grid-body">
          {
            loading
              ? <Loading/>
              : (group === null ? "Group not found!" :
              <Media query={SMALL_SCREEN_QUERY}>
                {
                  screenIsSmall => screenIsSmall
                    ?
                    <Switch>
                      <Route path={`${match.path}/:number`} render={props =>
                        <ThreadDetail {...props} group={group}
                                      article={threads.find(thread => thread.number === parseInt(props.match.params.number))
                                      || null}/>
                      }/>
                      <Route path={`${match.path}`}>
                        <List data={articleListData}/>
                      </Route>
                    </Switch>
                    :
                    <SidebarContent
                      sidebar={this.state.subscribedGroupsName.length === 0
                                                 ? <div className="no-thread">
                                                   <div className="no-thread-text">
                                                     Welcome to newsR - <Link to={`/groups-manage`}>Subscribe to a newsgroup</Link> to get started!
                                                   </div>
                                                 </div>
                                                 : <List data={getGroups(true).map((curgroup) => ({
                                                   title: curgroup.name,
                                                   subtitle: curgroup.description,
                                                   url: `/groups/${curgroup.name}`,
                                                   bold: group.name === curgroup.name,
                                                   class: group.name === curgroup.name ? "active-group" : "",
                                                    onPress: () => {
                                                          this.componentDidMount();
                                                    }
                                                 }))}/>}

                      content1={<Table onPressSort={(sortColumn, ascending) => this.setState({sortColumn: sortColumn, ascending: ascending})} sortColumn={this.state.sortColumn} ascending={this.state.ascending} data={articleTableData} columns={[new TableColumn("Threads", 0, ""), new TableColumn("Subject", 0, "subject"), new TableColumn("Author", 1, "author"), new TableColumn("Date", 2, "date"), new TableColumn("Size", 0, "size"), new TableColumn("📎", 0, "hasattachment")]} urlColumn="url"/>}

                      content2={
                        <Switch>
                          <Route path={`${match.path}/:number`} render={props =>
                            <ThreadDetail {...props} group={group}
                                          article={threads.find(thread => thread.number === parseInt(props.match.params.number))
                                          || null}/>
                          }/>
                          <NoThread url={match.path} groupName={group.name}/>
                        </Switch>
                      }/>
                    }
              </Media>)
          }
        </div>
        <Footer/>
      </div>
    )
  }
}

function NoThread(props: {
  url: string
  groupName: string
}) {
  return (
    <Route path={props.url}>
      <div className="no-thread">
        <div className="no-thread-text">
          {"Welcome to " + props.groupName}
        </div>
        <div className="no-thread-text">
          Please select a thread or <Link to={`/post/${props.groupName}`}>write</Link> a new post!
        </div>
      </div>
    </Route>
  )
}

