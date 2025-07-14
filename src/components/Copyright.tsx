import React from "react";

const Copyright = () => {
  return (
    <div className="copyright md:pt-[1rem]">
      <p>
        互联网增值电信业务许可证编号：     <a href="https://beian.miit.gov.cn/" target="_blank" className="hover:underline"> 渝B2-20120028 | 渝ICP备10200070号-3</a>&nbsp;
        互联网药品信息服务资格证：      (渝)-经营性-2021-0017
      </p>
      <p className="copy">
        <span>康洲大数据 Copyright © 2009-2025 药智网 YAOZH.COM All Rights Reserved.</span>&nbsp;
        <span>法律顾问：重庆百君律师事务所  时作尧律师</span>
      </p>
      <p>
        客户服务热线： 400-678-0778&nbsp;
        邮箱： tousu@yaozh.com
      </p>
      <p>
        本网站用字经北京北大方正电子有限公司授权许可
      </p>
      <div className="clear">
        <a className="c6 hover:underline" rel="nofollow" href="https://www.12377.cn/" target="_blank">暴恐音视频举报专区   互联网违法和不良信息举报中心</a>
        <div className="fbao relative group">
          <span>涉网络暴力有害信息举报</span>
          <div className="fbao-msg hidden absolute top-full left-0 bg-white p-2 rounded shadow-xl group-hover:block z-10 border border-black">
            <p>投诉热线：(023) 6262 8397</p>
            <p>邮箱：tousu@yaozh.com</p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <a
          target="_blank"
          href="https://zzlz.gsxt.gov.cn/businessCheck/verifKey.do?showType=p&amp;serial=50000020190619091527000002811256-SAIC_SHOW_10002020190619103111784&amp;signData=MEQCIOg/nINWReoZJ+dU/wILLifhvSOz9D4EYDEK3WtxHyO8AiAvFfB+2SeT5jAkXsz8uLG1CECvRKbVT7bvKWIhQ3lkgQ=="
          className="w-5 h-5 rounded-full"
        >
          <img src="//www-dev.yaozh.com/public/images/lz4.png" className="w-[20px] h-[20px]"/>
        </a>

        <a
          id="netsafe"
          target="_blank"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=50010802001068"
          className="flex items-center space-x-1"
        >
          <img src="//www-dev.yaozh.com/public/images/netsafe.png" className="w-[20px] h-[20px]"/>
          <span>渝公网安备 50010802001068号</span>
        </a>
      </div>

      <div className="tousu">
        <img src="/public/images/tousu.png" alt=""/>
        <div className="tousu-msg hidden">
          <p>
            投诉热线：(023) 6262 8397
          </p>
          <p>
            邮箱：tousu@yaozh.com
          </p>
          <p>
            QQ：236960938
          </p>
        </div>
      </div>
    </div>);
}

export default Copyright;