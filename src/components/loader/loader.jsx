import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { TailSpin } from "react-loader-spinner";
import lodash from "lodash";

// Style Imports
import { LoadingWrapper } from "styles/styles";

const AppLoader = (props) => {
  const { children, loadingRef } = props;
  let loading = !!useSelector((state) => lodash.get(state, loadingRef));
  return (
    <Fragment>
      <LoadingWrapper show={loading}>
        <TailSpin height="100" width="100" color="black" ariaLabel="loading" />
      </LoadingWrapper>
      {children}
    </Fragment>
  );
};

export default AppLoader;
