import XL from "../../../../assets/token/Logo-brandColor.jpg";
import L from "../../../../assets/token/LLA-bot-img2-6.jpg";
interface TokenIconProps {
  symbol: "XL" | "L" | string | null | undefined;
  address: string;
}
const TokenIcon = (props: TokenIconProps) => {
  return (
    <div>
      {(props.symbol === "XL" || props.symbol === "L") && (
        <div className="flex justify-center items-center">
          {props.symbol === "XL" &&
            props.address.toUpperCase() ===
              import.meta.env.VITE_ERB_XL_CONTRACT.toUpperCase() && (
              <img
                src={XL}
                className="w-24px h-24px object-cover rounded-full"
              />
            )}
          {props.symbol === "L" &&
            props.address.toUpperCase() ===
              import.meta.env.VITE_ERB_L_CONTRACT.toUpperCase() && (
              <img
                src={L}
                className="w-24px h-24px object-cover rounded-full"
              />
            )}
        </div>
      )}
      {props.address.toUpperCase() !==
        import.meta.env.VITE_ERB_XL_CONTRACT.toUpperCase() &&
      props.address.toUpperCase() !==
        import.meta.env.VITE_ERB_L_CONTRACT.toUpperCase() &&
      props.symbol ? (
        <div className="w-24px h-24px border-1px border-solid border-white rounded-full flex justify-center items-center font-bold">
          {props.symbol ? props.symbol.slice(0, 1).toUpperCase() : ""}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TokenIcon;
