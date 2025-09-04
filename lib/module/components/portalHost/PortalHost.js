"use strict";

import { memo, useEffect } from 'react';
import { usePortalState } from "../../hooks/usePortalState.js";
import { usePortal } from "../../hooks/usePortal.js";
import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
const PortalHostComponent = ({
  name
}) => {
  //#region hooks
  const state = usePortalState(name);
  const {
    registerHost,
    deregisterHost
  } = usePortal(name);
  //#endregion

  //#region effects
  useEffect(() => {
    registerHost();
    return () => {
      deregisterHost();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //#endregion

  //#region render
  return /*#__PURE__*/_jsx(_Fragment, {
    children: state.map(item => item.node)
  });
  //#endregion
};
export const PortalHost = /*#__PURE__*/memo(PortalHostComponent);
PortalHost.displayName = 'PortalHost';
//# sourceMappingURL=PortalHost.js.map