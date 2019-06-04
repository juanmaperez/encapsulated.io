import React, { Component } from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';

const ContactBlockView = styled.div`

  .contact-wrapper {
    padding: 50px 20px;
    opacity:0;
    transition: opacity 600ms linear;
    &.fade-in { opacity: 1 }

    .title-box {
      width: 100%;
      padding: 20px;
      box-sizing: border-box;
      margin-bottom: 30px;
  
      .contact-title {
        font-size: 8vw;
        margin: 50px 0px 0px;
        line-height: 0.9;
        color: var(--primaryColor);
        -webkit-text-stroke: 0.001em var(--primaryColor);
      }
      .contact-subtitle {
        margin-top: 50px;
        font-size: 8vw;
        margin: 0px;
        color: var(--tertiaryColor);
        -webkit-text-stroke: 0.001em var(--tertiaryColor);
      }
    }
    .content {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      .hi-box {
        width: 50%;
        padding: 20px;
        box-sizing: border-box;
        .contact-resume {
          line-height: 1.4;
          font-size: 22px;
          letter-spacing: 1px;
          h3 {
            font-size:34px;
            margin-bottom: 20px;
            line-height: 1;
          }
          p {
            max-width: 90%;
            margin-bottom: 20px;
            span {
              display:block;
              color: var(--secondaryColor);
              &.contact-btn { 
                margin-top: 5px;
                display:block;
                border: 2px solid;
                padding: 6px;
                text-align: center; 
                cursor: pointer;
                margin-bottom: 20px; 
                max-width: 200px;
              }
            }
          }
        }
      }
  
      .social-box {
        width: 50%;
        padding: 20px;
        box-sizing: border-box;
        line-height: 1.4;
        font-size: 22px;
        letter-spacing: 1px;
        ul {
          padding: 30px 0px;
          li {
            margin-bottom: 10px;
          }
          li:before {
            content: '💊';
            list-style: none;
            padding-right: 15px;
            font-size: 14px;
          }
        }
      }
    }
  
    @media(max-width: 768px){
      padding: 30px 0px;
  
      .title-box {
        .contact-title {
          font-size: 60px;
          color: var(--primaryColor);
        }
        .contact-subtitle {
          font-size: 60px;
          color: var(--tertiaryColor);
        }
  
      }
      
      .content {
        display: block;
        .hi-box, .social-box {
          width: 100%;
        }
      }
    }
  
    @media(max-width: 510px){
      padding: 30px 10px;
      min-height: ${props => props.height/1.2}px;
      .title-box {
        margin-bottom: 0px;
        .contact-title, .contact-subtitle {
          font-size: 40px;
        }
      }
      .content {
        .hi-box {
          .contact-resume {
            h3 {
              font-size:23px;            
              line-height: 1.4;
            }
          }
        }
      }
    }
  }

  .message {
    width: auto;
    padding: 15px 20px;
    position: fixed;
    bottom: 20px;
    left: 20px;
    border-radius: 4px;
    font-weight: bolder;
    background: var(--secondaryColor);
    color: var(--bgColor);
    box-shadow: 0px 1px 1px 1px rgba(var(--secondaryColor),0.2), 0 2px 4px rgba(var(--secondaryColor),0.08); 
  }


`

class ContactBlock extends Component {
  
  state = { msg: null, type: '', phone: '+44 07447881161', email: 'juanmaperezvar' };
  timeOut = null;

  getMyPhone = (e) => {
    e.preventDefault()
    const { phone } = this.state; 
    const result = this.copyTextToClipboard(phone, 'Phone');
    if (result) {
      this.removeMsg();
    }
  }

  getMyEmail = (e) => {
    e.preventDefault()
    const { email } = this.state;
    const fullEmail = `${email}@gmail.com`
    const result = this.copyTextToClipboard(fullEmail, 'Email');
    if (result) {
      this.removeMsg();
    }
  }

  copyTextToClipboard = (text, type) => {
    let txtArea;
    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
      txtArea = document.createElement('input');
    } else {
      txtArea = document.createElement('textarea');
    }
    txtArea.id = 'txt';
    txtArea.style.position = 'fixed';
    txtArea.style.top = '0';
    txtArea.style.left = '0';
    txtArea.style.opacity = '0';
    txtArea.style.opacity = '0';
    txtArea.value = text;

    document.body.appendChild(txtArea);
    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
      let editable = txtArea.contentEditable;
      let readOnly = txtArea.readOnly;
      txtArea.contentEditable = true;
      txtArea.readOnly = false;
      let range = document.createRange();
      range.selectNodeContents(txtArea);
      let sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      txtArea.setSelectionRange(0, 999999);
      txtArea.contentEditable = editable;
      txtArea.readOnly = readOnly;
    } else {
      txtArea.select();
    }

    try {
      const successful = document.execCommand('copy');
      const msg = successful ? `${ type } copied on your clipboard` : `${ type } unable to copy`;
      if (successful) {
        this.setState(()=>({ msg, type }))
        return true;
      }
    } catch (err) {
      console.error(this.msg);
    } finally {
      document.body.removeChild(txtArea);
    }
    return false;
  }

  removeMsg = () => {
    const msg = null;
    const type = '';
    this.timeOut = null;

    if(!this.timeOut){
      this.timeOut = setTimeout(() => this.setState(()=>({ msg, type })), 4000)
    }
  }

  render(){
    const { height} = this.props;
    const { msg } = this.state;

    return (
      <ContactBlockView height={height}>
        <Controller>
          <Scene classToggle={'fade-in'} triggerHook={0.65}>
            <div className="contact-wrapper">
              <div className="title-box">
                <h2 className="contact-title">Get in touch,</h2>
                <h2 className="contact-subtitle">don't be shy</h2>
              </div>
              <div className="content">
                <div className="hi-box">
                  <div className="contact-resume">
                  <h3>Available from September '19</h3>

                    <p>You have a project or idea which must be developed in a <strong>online environment</strong>, tell me more about it.</p>
                    <p><strong>Contact me:</strong></p>
                    <p>
                      <span className="contact-btn" onClick={this.getMyEmail}>Get my email</span>
                      <span className="contact-btn" onClick={this.getMyPhone}>Get my phone</span>
                    </p>
                  </div>
                </div>
                <div className="social-box">
                  <p>If you prefer something more social to talk with me, you can do it on the following platforms:</p>
                  <ul>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/juanmaperez">Github</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/juanmaperezvargas/">Linkedin</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.pinterest.co.uk/juanmaperezvar/">Pinterest</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/7850072/juanmaperez">StackOverflow</a></li>
                  </ul>
                </div>
              </div>
            </div>   
          </Scene>
        </Controller> 
        { msg && <div className="message">
          { msg }
        </div>}
      </ContactBlockView>
    )
  }
}

export default ContactBlock;