import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import { M_PLUS_Code_Latin } from "next/font/google";

export function SuccessfulWindow({ openSuccess, handleOpenSuccess }) {
  return (
    <Dialog open={openSuccess} handler={handleOpenSuccess} className="p-6 max-w-[480px] mx-auto">
      <DialogHeader className="justify-between text-base">
        <span className="text-base">内测申请</span>
        <i className="fa-solid fa-xmark cursor-pointer" onClick={handleOpenSuccess}></i>
      </DialogHeader>
      <DialogBody className="pt-[0.25rem] flex flex-col items-center">
        
        <div className="flex flex-row items-center">
          {/* 机器人图片 */}
          <img
            src="/image/机器人.png"
            alt="提交成功"
            className=""
          />
          {/* 成功提示文字 */}
          <div className="flex flex-col ml-[1.25rem]">
            <Typography variant="h5" className="font-bold text-[rgba(0,47,168,1)] text-[2rem]">
              提交成功
            </Typography>
            <Typography variant="small" className="text-gray-700">
              客服会尽快与您联系
            </Typography>
          </div>
        </div>

        {/* 辅助说明信息 */}
        <div className="text-sm text-gray-500 bg-[rgba(245,248,255,1)] p-2 w-full rounded mt-[3.125rem] font-normal">
          <p>• 每个手机号短期内（24小时）只能申请一次</p>
          <p>• 如有任何疑问，请拨打药智客服热线：400-678-0778</p>
        </div>
      </DialogBody>
      <DialogFooter className="p-0" ><></></DialogFooter>
    </Dialog>
  );
}
