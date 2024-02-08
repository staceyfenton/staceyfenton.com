import axios from "axios";
import React, { useState } from "react";
import Layout, { siteTitle, siteDescription } from '../components/layout'
import Meta from '../components/seo-meta'
import { useRouter } from 'next/router'

export default function GetInTouch() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/mqkgzpdz",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks for contacting me, I will respond to you as soon as possible.", form);
      })
      .catch(r => {
        handleServerResponse(false, "Oh no, something has gone wrong. Please try again.", form);
      });
  };

  const title = `Get in touch | ${siteTitle}`;
  const router = useRouter();

  return (
    <>
      <Layout>
        <Meta 
          title={title} 
          desc={siteDescription} 
          path={router.pathname}
        /> 
        <div className="container">
          <div className="body-content">
            <h2>Get in touch</h2>
            <p>Have a quick question? You can tweet me at <a href="https://twitter.com/staceyfenton" target="_blank" rel="noopener">@staceyfenton</a>. I’m also on <a href="https://www.linkedin.com/in/staceyfenton" target="_blank" rel="noopener">LinkedIn</a> if you’d like to connect with me there. </p>
            <p>Alternatively, you can fill in the contact form below or send me an email directly at <a href="mailto:hello@staceyfenton.com">hello@staceyfenton.com</a>. </p>
          
            {serverState.status && (
              <p className={!serverState.status.ok ? "notification is-error" : "notification is-success"}>
                {serverState.status.msg}
              </p>
            )}

            <form className="contact-form" onSubmit={handleOnSubmit}>
              <label htmlFor="name">Your name</label>
              <input type="text" name="name" id="name" required pattern="[a-zA-Z0-9 ]+" className="contact-form__input" autoComplete="name" />

              <label htmlFor="email">Your email address</label>
              <input type="email" name="_replyto" id="email" className="contact-form__input" required autoComplete="email" />

              <input type="hidden" name="_subject" id="subject" value="New contact form submission" />

              <label htmlFor="message">Your message</label>
              <textarea name="message" id="message" className="contact-form__input contact-form__textarea" required></textarea>
                          
              <button type="submit" className="contact-form__submit" disabled={serverState.submitting}>Send</button>
            </form>
          </div>
        </div>
      </Layout>
    </>
  )
}