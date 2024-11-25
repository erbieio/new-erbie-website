
import XL from '../../../../assets/token/Logo-brandColor.jpg'
import L from "../../../../assets/token/LLA-bot-img2-6.jpg";
interface TokenIconProps {
  name?: "XL" | "L" | string | null | undefined;
  address?: string
}
const TokenIcon = (props: TokenIconProps) => {
  return (
    <div>
      {(props.name === "XL" || props.name === "L") && (
        <div className="flex justify-center items-center">
          {props.name === "XL" && (
            <img src={XL} className="w-24px h-24px object-cover rounded-full" />
          )}
          {props.name === "L" && (
            <img src={L} className="w-24px h-24px object-cover rounded-full" />
          )}
        </div>
      )}
    </div>
  );
}

export default TokenIcon;
