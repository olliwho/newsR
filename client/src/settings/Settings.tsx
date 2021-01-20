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
  author: string,
  email: string,
  signature: string
}

//TODO: validate input

class _Settings extends React.Component<RouteComponentProps, {}> {

  state: Readonly<SettingsState> = {
    loading: true,
    setting: false,
    done: false,
    author: "",
    email: "",
    url: "",
    port: "",
    groupPrefix: "",
    signature: ""
  };

  async componentDidMount(): Promise<void> {

    this.setState({
      author: localStorage.getItem('authorName') || "",
      email: localStorage.getItem('authorEmail') || "",
      url: localStorage.getItem('nntpUrl') || "news.tugraz.at",
      port: localStorage.getItem('nntpPort') || "119",
      groupPrefix: localStorage.getItem('nntpGroupPrefix') || "tu-graz*",
      signature: localStorage.getItem('signature') || '',
      loading: false
    });
  }

  async setServer(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.setState({
      setting: true
    });
    const {author, email, url, port, groupPrefix, signature} = this.state;
    if (!url || !port || !groupPrefix) {
      console.error('Error: cannot set, please fill all fields.');
      return;
    }
    if(url !== localStorage.getItem('nntpUrl')){
      localStorage.clear();
    }
    localStorage.setItem('authorName', author);
    localStorage.setItem('authorEmail', email);
    localStorage.setItem('nntpUrl', url);
    localStorage.setItem('nntpPort', port);
    localStorage.setItem('nntpGroupPrefix', groupPrefix);
    localStorage.setItem('signature', signature);
    await Server.resetServer();

    this.setState({
      setting: false,
      done: true
    });
    this.props.history.push("/")
  }

  render() {
    const {loading, setting, done, author, email, url, port, groupPrefix, signature} = this.state;
    return (
      <div className="app-grid">
        <Helmet>
          <title>newsR - Settings</title>
        </Helmet>
        <Header name={"Settings"}/>
        <div className="app-grid-body">
          {
            loading ? <Loading/> :
              <form className="post-article" onSubmit={(event: FormEvent<HTMLFormElement>) => this.setServer(event)}>
                <h1 className="settings-group-title">Server</h1>
                <div className="input-group">
                  <label className="fieldLabel" htmlFor="url">Server URL:</label>
                      <input
                        required
                        name="url"
                        type="text"
                        title="Server URL"
                        placeholder="Server URL"
                        value={url}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                          this.setState({
                            url: event.currentTarget.value
                          })
                        }}
                  />
                </div>
                <div className="input-group">
                  <label className="fieldLabel" htmlFor="port">Server Port:</label>
                      <input
                        required
                        name="port"
                        type="text"
                        title="Server Port"
                        placeholder="Server Port"
                        value={port}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                          this.setState({
                            port: event.currentTarget.value
                          })
                        }}
                  />
                </div>
                <div className="input-group">
                  <label className="fieldLabel" htmlFor="prefix">Group Prefix:</label>
                      <input
                        required
                        name="prefix"
                        type="text"
                        title="Group Prefix"
                        placeholder="Group Prefix"
                        value={groupPrefix}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                          this.setState({
                            groupPrefix: event.currentTarget.value
                          })
                        }}
                  />
                </div>
                <hr/>
                <h1 className="settings-group-title">User</h1>
                <div className="input-group">
                  <label className="fieldLabel" htmlFor="name">Full Name: </label>
                  <input
                    required
                    name="name"
                    type="text"
                    title="Your Name"
                    placeholder="Full Name"
                    value={author}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      this.setState({
                        author: event.currentTarget.value
                      })
                    }}
                  />
                </div>
                <div className="input-group">
                  <label className="fieldLabel" htmlFor="url">E-Mail Address:</label>
                  <input
                    required
                    name="url"
                    type="email"
                    title="E-mail Address"
                    placeholder="E-mail Address"
                    value={email}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      this.setState({
                        email: event.currentTarget.value
                      })
                    }}
                  />
                </div>
                <div className="input-group">
                  <label className="fieldLabel" htmlFor="signature">Signature:</label>
                      <textarea
                        name="signature"
                        title="Signature"
                        placeholder="Your Signature..."
                        value={signature}
                        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
                          this.setState({
                            signature: event.currentTarget.value
                          })
                        }}
                  />
                </div>
                <div className="input-group">
                  <button className="submit" type="submit" disabled={setting}>
                    {
                      setting ? <FontAwesomeIcon icon="spinner" spin />
                        : (done ? "Saved!" : "Save")
                    }
                  </button>
                  <button className="back" type="reset" onClick={() => this.props.history.goBack()}>Cancel</button>
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