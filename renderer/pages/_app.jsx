import React, {useState} from "react";
import Head from "next/head";
import TitleBar from "../src/components/Titlebar/TitleBar.jsx";
import styles from "./_app.module.scss";
import "../src/styles/globals.css";
import { UserProvider } from "../src/components/contexts/UserContext";

export default function (props) {
  const { Component, pageProps } = props;
  
  // const [titleAlignment, setTitleAlignment] = useState("Left");

  // const handleTitleAlignmentOnChange = (currentTitleAlignment) => {
  //   setTitleAlignment(currentTitleAlignment);    
  // }

    React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <UserProvider>
        <div className={styles.container}>
          <div className={styles.content}>
            <Component {...pageProps} />
          </div>
          
        </div>
      </UserProvider>
    </React.Fragment>
  );
}