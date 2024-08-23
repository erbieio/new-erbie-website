import { useOutlet } from "react-router-dom";
import "./Explorer.scss";
import {
  CSSTransition,
  SwitchTransition,
  TransitionGroup,
} from "react-transition-group";
import ExplorerMenus from "./ExplorerMenus";
import SearchIpt from "./components/SearchIpt";
export default function Explorer() {
  const currentOutlet = useOutlet({
    redirect: "/explorer",
  });
  return (
    <div className="page-explorer flex flex-col lg:flex-row lg:justify-between">
      <div className="flex items-center">
        <ExplorerMenus />
        <div className="flex-1 block lg:hidden pl-8px">
          <SearchIpt />
        </div>
      </div>
      <div className="w-100% scrollbar-x lg:pl-30px lg:overflow-x-scroll lg:scrollbar-x flex justify-center items-center overflow-x-hidden">
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
