import React, { Component } from 'react';
import styled from 'styled-components';

const ContactBlockView = styled.div`
  padding: 50px 0px;
  .title-box {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    margin-bottom: 30px;

    .contact-title {
      font-size: 8vw;
      margin: 50px 0px 0px;
      line-height: 0.6;
      color: transparent;
      -webkit-text-stroke: 0.001em var(--primaryColor);
    }
    .contact-subtitle {
      margin-top: 50px;
      font-size: 8vw;
      margin: 0px;
      color: transparent;
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
        font-size: 20px;
        letter-spacing: 1px;
        p {
          max-width: 90%;
          margin-bottom: 20px;
          strong {
            color: var(--secondaryColor);
            &.contact-btn { text-decoration: underline }
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
    font-size: 20px;
    letter-spacing: 1px;
    ul {
      padding: 30px 20px;
      li {
        margin-bottom: 10px;
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

  getMyPhone = () => {
    const { phone } = this.state; 
    const result = this.copyTextToClipboard(phone, 'Phone');
    if (result) {
      this.removeMsg();
    }
  }

  getMyEmail = () => {
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
        <div className="title-box">
          <h2 className="contact-title">Get in touch,</h2>
          <h2 className="contact-subtitle">don't be shy</h2>
        </div>
        <div className="content">
          <div className="hi-box">
            <div className="contact-resume">
              <p>You have a project or idea which must be developed in a <strong>online environment</strong>, tell me more about it.</p>
              <p>Let me know what are you thinking about and we can decide together what's the <strong>best approach</strong> for making it live.</p>
              <p>Get the best results and engage your target with an <strong>amazing website</strong> and the most accurate UX.</p>
              <p>Contact by <strong className="contact-btn" onClick={this.getMyEmail}>email</strong> or <strong className="contact-btn" onClick={this.getMyPhone}>phone</strong></p>
              <p></p>
            </div>
          </div>
          <div className="social-box">
            <p>If you rather something more social to talk with me, you can also find me on different social platforms throught the following links:</p>
            <ul>
              <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/juanmaperez">Github</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/juanmaperezvargas/">Linkedin</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://www.pinterest.co.uk/juanmaperezvar/">Pinterest</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/7850072/juanmaperez">StackOverflow</a></li>
            </ul>
          </div>
        </div>    
        { msg && <div className="message">
          { msg }
        </div>}
      </ContactBlockView>
    )
  }
}

export default ContactBlock;