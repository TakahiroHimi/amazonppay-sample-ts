import React, { useEffect } from "react";

declare const window: any;

export const AmazonPayButton: React.FC = () => {
  const onError = (error_message: string) => {
    // this.setState({ error: true, error_message });
    console.log(error_message);
  };

  useEffect(() => {
    window["showButton"](onError);
  }, []);

  return <div id="AmazonPayButton"></div>;
};
