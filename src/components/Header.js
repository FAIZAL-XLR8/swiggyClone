import {Link} from "react-router"
export function Header() {
  return (
    <header className="bg-[#ff5200]">
      <div className=" flex  container  py-9 px-8">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
          className="w-40 h-12 mr-auto ml-[118px]"
        />
        <div className="flex  items-center gap-8 px-auto text-white mr-[130px] text-[15px] font-bold" >
        
          <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy corporate</a>
              <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">Partner with us</a>
              <a className="border border-white px-4 py-3 rounded-2xl w-[150px]">Get the App ↗</a>
       
              
              <button className=" bg-black border border-none px-4 py-3 rounded-2xl w-[135px]">
              Sign in</button>
        </div>
        
      </div>
      <div className="pt-16 pb-8 relative">
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" className="absolute top-0 left-0 h-110 w-60"></img>
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" className="absolute top-0 right-0 h-110 w-60"></img>
        <div className="text-5xl text-white max-w-[60%] text-center container  mx-auto font-bold">
          Order food & groceries.Discover best Resturants.Swiggy it!
        </div>
        <div className="container mx-auto flex gap-5  max-w-[70%] mt-5">
          <input placeholder="Delhi,India" className=" bg-white text-xl px-6 py-4 w-[40%] rounded-[12px] ml-[15px] mr-[10px]"></input>
          <input placeholder="Search for Resturants and items for more" className=" bg-white text-xl px-6 py-4 w-[55%] rounded-[12px] "></input>
        </div>
        <div className="max-w-[80%] container mx-auto"></div>
      </div>
      <div className="max-w-[80%] container mx-auto flex">
  <Link to={"/resturants"}>
    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img>
  </Link>
    
      
        <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"></img>
        </a>
        <a href="https://www.swiggy.com/dineout">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"></img>
        </a>
        
      </div> 
    </header>
  );
}
