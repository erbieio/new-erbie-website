import { useOutlet } from "react-router-dom";
import "./Explorer.scss";
import {
  CSSTransition,
  SwitchTransition,
  TransitionGroup,
} from "react-transition-group";
import ExplorerMenus from "./ExplorerMenus";
export default function Explorer() {
  const currentOutlet = useOutlet();
  return (
    <div className="page-explorer flex flex-col lg:flex-row lg:justify-between">
      <div className="flex items-center">
        <ExplorerMenus />
      </div>
      <div className="w-100% lg:pl-30px lg:min-w-1000px lg:overflow-x-scroll scrollbar-x flex justify-center items-center">
        <TransitionGroup className={"w-100%"}>
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={location.pathname}
              appear={true}
              timeout={400}
              unmountOnExit={true}
              classNames={"fade"}
            >
              {currentOutlet}
            </CSSTransition>
          </SwitchTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}
