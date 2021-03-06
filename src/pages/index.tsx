import AOS from "aos";

import Header from "../components/header";
import Hero from "../components/hero";
import UseCase from "../components/usecase";
import UsedIn from "../components/usedin";
import Content from "../components/content";
import GettingStarted from "../components/gettingstarted";
import Action from "../components/action";
import Footer from "../components/footer";
import React from "react";

export default class HomePage extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 750,
    });
  }

  render() {
    return (
      <div className="gradient leading-relaxed tracking-wide flex flex-col">
        <Header />
        <Hero />
        <UseCase />
        <UsedIn />
        <Content />
        <GettingStarted />
        <Action />
        <Footer />
      </div>
    );
  }
}
