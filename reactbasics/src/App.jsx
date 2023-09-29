import React, {Component, Fragment,} from 'react'
import './App.css'
import Greet from './components/Greet.jsx'
import Message from "./components/message.jsx";
import Counter from "./components/Counter.jsx";
import Click from "./components/click.jsx";
import EventBind from "./components/EventBind.jsx";
import ParentComponent from "./components/ParentComponent.jsx";
import UserGreeting from "./components/UserGreeting.jsx";
import NameList from "./components/NameList.jsx";
import Form from "./components/Form.jsx";
import LifeCycleA from "./components/LifeCycleA.jsx";
import FragmentDemo from "./components/FragmentDemo.jsx";
import Tables from "./components/Tables.jsx";
import PureComp from "./components/PureComp.jsx";
import Parentcomp from "./components/Parentcomp.jsx";
import RefsDemo from "./components/RefsDemo.jsx";
import FocusInput from "./components/FocusInput.jsx";
import FRParrentInput from "./components/FRParrentInput.jsx";
import Practice from "./components/practice.jsx";
import Portalsdemo from "./components/Portalsdemo.jsx";

import Hero from "./components/Hero.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import ClickCounter from "./components/ClickCounter.jsx";
import Hovercounter from "./components/Hovercounter.jsx";
import UpdatedComponent from "./components/withCounter.jsx";
import ClickCounter2 from "./components/ClickCounter2.jsx";
import HoverCounter2 from "./components/HoverCounter2.jsx";
import User from "./components/User.jsx";
import ComponentC from "./components/ComponentC.jsx";
import {UserProvider} from "./components/userContext.jsx";
import ComponentA from "./components/ComponentA.jsx";
import Counter1 from "./components/Counter1.jsx";
import HookCounter from "./components/HookCounter.jsx";
import HookCounter2 from "./components/HookCounter2.jsx";
import HookCounter3 from "./components/HookCounter3.jsx";
import Practice2 from "./components/Practice2.jsx";
import HookCounterFour from "./components/HookCounterFour.jsx";
import HookCounterOne from "./components/HookCounterOne.jsx";
import HookMouse from "./components/HookMouse.jsx";
import MouseContainer from "./components/MouseContainer.jsx";
import ClassIntervalCounter from "./components/ClassIntervalCounter.jsx";
import IntervalHookCounter from "./components/IntervalHookCounter.jsx";
import DataFetching from "../DataFetching.jsx";




class App extends Component{

  render() {
    return  (
                    <div className="App">
                        {/*<Greet name="Vivek" gender={"male"}></Greet>
                        <Message />
                        <Counter/>
                        <Click />
                        <EventBind></EventBind>
                        <ParentComponent />
                        <UserGreeting />
                        <NameList />
                        <Form />
                        <LifeCycleA />
                        <FragmentDemo />
                        <Tables />
                        <Parentcomp />
                        <RefsDemo />
                        <FocusInput />
                        <FRParrentInput />
                        <Practice/>
                        <Portalsdemo />
                        <ErrorBoundary>
                        <Hero heroname="Batman" /> </ErrorBoundary>
                        <ErrorBoundary> <Hero heroname="Superman" /></ErrorBoundary>
                        <ErrorBoundary> <Hero heroname="Joker" /></ErrorBoundary>
                        <ClickCounter />
                        <Hovercounter />
                            <ClickCounter2 />
                        <HoverCounter2 />
                        <User render={(isLoggedIn)=>isLoggedIn? "Vivek" : "Guest"} />

                        <Counter>
                            {(count,counter)=>(
                            <ClickCounter2 count={count} counter={counter}/>
                        )}</Counter>
                        <Counter>
                            {(count,counter)=>(
                            <HoverCounter2 count={count} counter={counter}/>
                        )}</Counter>

                        <UserProvider value="Vivek">
                    <ComponentA />
                       < /UserProvider>

                        <Practice />
                        <Counter1 />

                        <HookCounter />
                        <HookCounter2 />
                        <HookCounter3 />
                        <Practice2 />
                    <HookCounterFour/>
                    <HookCounterOne />
                        <HookMouse/>
                        <MouseContainer/>
                        <ClassIntervalCounter/>
                        <IntervalHookCounter/>*/}
                        <DataFetching/>
                    </div>
      );
  }
}

export default App
