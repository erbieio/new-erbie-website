export default function Footer() {
  return (
    <div className="flex footer px-16px lg:px-40px py-24px lg:h-9vh lg:py-0 font-size-12px font-bold items-center  border-t-width-2px border-t-style-solid border-t-color-#2A1F32">
      <div className="flex-col lg:flex-row flex justify-between flex-1">
        <div className="text-left">Copyright © 2024 - Erbie</div>
        <div className="flex mt-16px lg:mt-0">
          <div>
            <a href="https://www.erbie.io/PrivacyNotice" className="link color-#777 " target="__blank">
              Privacy Policy
            </a>
          </div>
          <div className="ml-24px lg:ml-40px">
            <a href="https://www.erbie.io/TermsOfService" className="link color-#777 " target="__blank">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
