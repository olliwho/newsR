import React, {ChangeEvent, FormEvent} from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {Loading} from "../template/Loading";
import {Helmet} from "react-helmet";
import {Header} from "../template/Header";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Footer} from "../template/Footer";
import {Server} from "../server/Server";

interface SettingsState {
  loading: boolean;
  setting: boolean;
  done: boolean;
  url: string,
  port: string,
  groupPrefix: string,
}

//TODO: validate input

class _Settings extends React.Component<RouteComponentProps, {}> {

  state: Readonly<SettingsState> = {
    loading: true,
    setting: false,
    done: false,
    url: "",
    port: "",
    groupPrefix: "",
  };

  async componentDidMount(): Promise<void> {

    this.setState({
      url: localStorage.getItem('nntpUrl') || "news.tugraz.at",
      port: localStorage.getItem('nntpPort') || "119",
      groupPrefix: localStorage.getItem('nntpGroupPrefix') || "tu-graz*",
      loading: false
    });
  }

  async setServer(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.setState({
      setting: true
    });
    const {url, port, groupPrefix} = this.state;
    if (!url || !port || !groupPrefix) {
      console.error('Error: cannot set, please fill all fields.');
      return;
    }
    if(url !== localStorage.getItem('nntpUrl')){
      localStorage.clear();
    }
    localStorage.setItem('nntpUrl', url);
    localStorage.setItem('nntpPort', port);
    localStorage.setItem('nntpGroupPrefix', groupPrefix);
    await Server.resetServer();

    this.setState({
      setting: false,
      done: true
    });
    console.log(this.props.history)
    this.props.history.push("/")
  }

  render() {
    const {loading, setting, done, url, port, groupPrefix} = this.state;
    return (
      <div className="app-grid">
        <Helmet>
          <title>newsR</title>
        </Helmet>
        <Header name={"Settings"}/>
        <div className="app-grid-body">
          {
            loading ? <Loading/> :
              <form className="post-article" onSubmit={(event: FormEvent<HTMLFormElement>) => this.setServer(event)}>
                <div className="input-group">
                  <input
                    required
                    name="url"
                    type="text"
                    title="Server URL like news.tugraz.at"
                    placeholder="Server URL like news.tugraz.at"
                    value={url}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      this.setState({
                        url: event.currentTarget.value
                      })
                    }}
                  />
                </div>
                <div className="input-group">
                  <input
                    required
                    name="port"
                    type="text"
                    title="Server Port like 119"
                    placeholder="Server Port like 119"
                    value={port}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      this.setState({
                        port: event.currentTarget.value
                      })
                    }}
                  />
                </div>
                <div className="input-group">
                  <input
                    required
                    name="prefix"
                    type="text"
                    title="Group Prefix like tu-graz*"
                    placeholder="Group Prefix like tu-graz*"
                    value={groupPrefix}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      this.setState({
                        groupPrefix: event.currentTarget.value
                      })
                    }}
                  />
                </div>
                <div className="input-group">
                  <button className="submit" type="submit" disabled={setting}>
                    {
                      setting ? <FontAwesomeIcon icon="spinner" spin />
                        : (done ? "Set!" : "Set")
                    }
                  </button>
                </div>
              </form>
          }
        </div>
        <Footer/>
      </div>
    );
  }
}

export const Settings = withRouter(_Settings);