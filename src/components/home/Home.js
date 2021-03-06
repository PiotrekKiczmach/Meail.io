import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import HistoryList from '../history/HistoryList';
import 'materialize-css/dist/css/materialize.min.css';
import Notification from 'react-web-notification/lib/components/Notification';



class Home extends Component {


    constructor(props) {
        super(props);
        this.state = {
            ignore: true,
            title: ''
        };
    }

    componentDidMount() {
        setInterval(
            this.handleButtonClick.bind(this), 30000);
    }
    handlePermissionGranted(){
        console.log('Permission Granted');
        this.setState({
          ignore: false
        });
      }
      handlePermissionDenied(){
        console.log('Permission Denied');
        this.setState({
          ignore: true
        });
      }
      handleNotSupported(){
        console.log('Web Notification not Supported');
        this.setState({
          ignore: true
        });
      }
    
      handleNotificationOnClick(e, tag){
        console.log(e, 'Notification clicked tag:' + tag);
      }
    
      handleNotificationOnError(e, tag){
        console.log(e, 'Notification error tag:' + tag);
      }
    
      handleNotificationOnClose(e, tag){
        console.log(e, 'Notification closed tag:' + tag);
      }
    
      handleNotificationOnShow(e, tag){
        console.log(e, 'Notification shown tag:' + tag);
      }
    
      handleButtonClick() {
    
        if(this.state.ignore) { return; }
        const now = Date.now();

        const title = 'Czas na posiłek';
        const body = 'Polecamy: Bruschetta z kurczakiem\t\t Kolorie: 398';
        const tag = now;
        const icon = 'http://georgeosddev.github.io/react-web-notification/example/Notifications_button_24.png';
        // const icon = 'http://localhost:3000/Notifications_button_24.png';

        // Available options
        // See https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification
        const options = {
        tag: tag,
        body: body,
        icon: icon,
        lang: 'pl',
        dir: 'ltr'
        }
        this.setState({
        title: title,
        options: options
        });
    }

    render() {
        const { auth, history, calories } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        if(calories.caloires <= 0) return <Redirect to='/calculate' />
            return (
                <Fragment>
                    <Navbar />
                    <div className="container">
                        <div className="row">
                            <div className="center-align">
                                <h3>Twoje dzienne zapotrzebowanie na kalorie</h3>
                                <h4>{calories.calories} kcal</h4>
                            </div>
                        </div>
                    </div>
                    <Notification
                        ignore={this.state.ignore && this.state.title !== ''}
                        notSupported={this.handleNotSupported.bind(this)}
                        onPermissionGranted={this.handlePermissionGranted.bind(this)}
                        onPermissionDenied={this.handlePermissionDenied.bind(this)}
                        onShow={this.handleNotificationOnShow.bind(this)}
                        onClick={this.handleNotificationOnClick.bind(this)}
                        onClose={this.handleNotificationOnClose.bind(this)}
                        onError={this.handleNotificationOnError.bind(this)}
                        timeout={5000}
                        title={this.state.title}
                        options={this.state.options}
                    />
                </Fragment>
            );
    }

}


const mapStateToProps = (state) => {
     console.log(state);
    return {
      auth: state.firebase.auth,
      calories: state.firebase.profile,
      history: state.firestore
    }
  }

  export default
    connect(mapStateToProps)(Home)
