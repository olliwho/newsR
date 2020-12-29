import React, {ChangeEvent, FormEvent} from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {Loading} from "../template/Loading";
import {Helmet} from "react-helmet";
import {Header} from "../template/Header";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Footer} from "../template/Footer";
import {PostRouteParams} from "../post/Post";

interface ServerSelectState {
  loading: boolean;
  setting: boolean;
  done: boolean;
  url: string,
  port: string,
  groupPrefix: string,
}

//TODO: validate input

class _ServerSelect extends React.Component<RouteComponentProps<PostRouteParams>, {}> {

  state: Readonly<ServerSelectState> = {
    loading: true,
    setting: false,
    done: false,
    url: "",
    port: "",
    groupPrefix: "",
  };

  async componentDidMount(): Promise<void> {

    this.setState({
      url: localStorage.getItem('nnptUrl') || "",
      port: localStorage.getItem('nnptPort') || "",
      groupPrefix: localStorage.getItem('nnptGroupPrefix') || "",
      loading: false
    });
  }

  async send(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.setState({
      setting: true
    });
    const {url, port, groupPrefix} = this.state;
    if (!url || !port || !groupPrefix) {
      console.error('Error: cannot set, please fill all fields.');
      return;
    }

    localStorage.setItem('nntpUrl', url);
    localStorage.setItem('nntpPort', port);
    localStorage.setItem('nntpGroupPrefix', groupPrefix);

    this.setState({
      setting: false,
      done: true
    });
    this.props.history.goBack()
  }

  render() {
    const {loading, setting, done, url, port, groupPrefix} = this.state;
    return (
      <div className="app-grid">
        <Helmet>
          <title>newsR</title>
        </Helmet>
        <Header name={""}/>
        <div className="app-grid-body">
          {
            loading ? <Loading/> :
              <form className="post-article" onSubmit={(event: FormEvent<HTMLFormElement>) => this.send(event)}>
                <div className="input-group">
                  <input
                    required
                    name="url"
                    type="text"
                    placeholder="news.tugraz.at"
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
                    placeholder="119"
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
                    placeholder="tu-graz*"
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

export const ServerSelect = withRouter(_ServerSelect);