import { useOutlet } from "react-router-dom";
import "./Explorer.scss";
import {
  CSSTransition,
  SwitchTransition,
  TransitionGroup,
} from "react-transition-group";
import ExplorerMenus from "./ExplorerMenus";
import SearchIpt from "./components/SearchIpt";
import { Affix } from "antd";
import { setExplorerFixed } from "../../store/pageAnimateSlice";
import { useDispatch } from "react-redux";
export default function Explorer() {
  const currentOutlet = useOutlet({
    redirect: "/explorer",
  });
  const dispatch = useDispatch()
  const handleChange = (e: boolean | undefined) => {
    dispatch(setExplorerFixed(e));
  }
  return (
    <div className="page-explorer flex flex-col lg:flex-row lg:justify-between">
      <div className="flex items-center">
        <Affix offsetTop={0} onChange={handleChange} className="w-100%">
          <div className="flex items-center lg:w-100px py-10px bg-#0D0316">
            <ExplorerMenus />
            <div className="flex-1 block lg:hidden pl-8px">
              <SearchIpt />
            </div>
          </div>
        </Affix>
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
