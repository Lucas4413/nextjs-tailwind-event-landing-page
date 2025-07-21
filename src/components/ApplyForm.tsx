import { useGlobalStates } from "@/store/useGlobalStates";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option,
  Textarea,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";

const departments = ["销售部","市场部","研发部","质量部","生产部","医学部","注册部","临床部","BD部","投资/战略/NPP","市场准入/政府事务","其他（请填写）"]

// 药小智申请表单
export function ApplyForm ({open, handleOpen}) {
  //全局变量
  const {userInfo} = useGlobalStates();
  //局部变量
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [otherDepartment, setOtherDepartment] = useState("");
  const [position, setPosition] = useState("");
  const [requirement, setRequirement] = useState("");
  const [checked, setChecked] = useState(false);

  return (
  <Dialog open={open} handler={handleOpen} className="">
    <DialogHeader className="justify-between">
      <span>内测申请</span>
      <i className="fa-solid fa-xmark"></i>
    </DialogHeader>
    <DialogBody className="">
      <form className="mt-8 mb-2 max-w-screen-lg w-full self-center">
        <div className="mb-1 grid grid-cols-1 sm:grid-cols-2 gap-6 ">
          {/* 每项表单输入组 */}
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-1">
              <span className="text-[rgba(255,77,77,1)]">*</span> 公司
            </Typography>
            <Input
              size="lg"
              maxLength={100}
              placeholder="请输入公司名称"
              className="!border-t-blue-gray-200 focus:!border-[rgba(0,47,168,1)]"
              labelProps={{ className: "before:content-none after:content-none" }}
              crossOrigin={undefined}
            />
          </div>

          <div>
            <Typography variant="h6" color="blue-gray" className="mb-1">
              <span className="text-[rgba(255,77,77,1)]">*</span> 姓名
            </Typography>
            <Input
              size="lg"
              placeholder="请输入姓名"
              maxLength={30}
              className="!border-t-blue-gray-200 focus:!border-[rgba(0,47,168,1)]"
              labelProps={{ className: "before:content-none after:content-none" }}
              crossOrigin={undefined}
            />
          </div>

          <div>
            <Typography variant="h6" color="blue-gray" className="mb-1">
              <span className="text-[rgba(255,77,77,1)]">*</span> 手机号码
            </Typography>
            <Input
              variant="outlined"
              maxLength={11}
              type="number"
              size="lg"
              placeholder="请输入手机号码"
              className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 focus:!border-[rgba(0,47,168,1)] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              labelProps={{ className: "before:content-none after:content-none" }}
              crossOrigin={undefined}
            />
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-1">
              <span className="text-[rgba(255,77,77,1)]">*</span> 验证码
            </Typography>
            <div className="flex gap-4">
              <Input
                size="lg"
                placeholder="请输入验证码"
                maxLength={10}
                className="!border-t-blue-gray-200 focus:!border-[rgba(0,47,168,1)]"
                labelProps={{ className: "before:content-none after:content-none" }}
                crossOrigin={undefined}
              />
              <Button
                size="sm"
                color={ phone ? "gray" : "blue-gray"}
                disabled={!phone}
                className="flex-1/3"
              >
                点击获取
              </Button>
            </div>
          </div>

          <div>
            <Typography variant="h6" color="blue-gray" className="mb-1">
              <span className="text-[rgba(255,77,77,1)]">*</span> 部门
            </Typography>
            <Select 
              labelProps={{ className: "before:content-none after:content-none" }}
              value={department}
              onChange={(val) => {
                if (val !== undefined) setDepartment(val);
              }}
              className="!border-t-blue-gray-200 focus:!border-[rgba(0,47,168,1)]"
            >
              {departments.map((dep, key) => {
                return <Option key={key} value={dep}>{dep}</Option>
              })}
            </Select>
            {department === "其他（请填写）" && (
              <Input
                value={otherDepartment}
                onChange={(e) => setOtherDepartment(e.target.value)}
                placeholder="请输入部门"
                maxLength={30}
                className="!border-t-blue-gray-200 focus:!border-[rgba(0,47,168,1)]"
                labelProps={{ className: "before:content-none after:content-none" }}
                crossOrigin={undefined}/>
            )}
          </div>

          <div>
            <Typography variant="h6" color="blue-gray" className="mb-1">
              <span className="text-[rgba(255,77,77,1)]">*</span> 职位
            </Typography>
            <Input
              size="lg"
              placeholder="请输入职位"
              maxLength={30}
              className="!border-t-blue-gray-200 focus:!border-[rgba(0,47,168,1)]"
              labelProps={{ className: "before:content-none after:content-none" }}
              crossOrigin={undefined}
            />
          </div>

          <div className="col-span-2">
            <Typography variant="h6" color="blue-gray" className="mb-1">
              <span className="text-[rgba(255,77,77,1)]">*</span> 需求
            </Typography>
            <Textarea
              size="lg"
              placeholder="您希望'药智生物医药行业大模型优先解决哪些业务问题？请描述相关业务场景及痛点"
              maxLength={200}
              className="!border-t-blue-gray-200 focus:!border-[rgba(0,47,168,1)]"
              labelProps={{ className: "before:content-none after:content-none" }}
            />
          </div>
        </div>

        {/* checkbox 和按钮继续放在表单底部 */}
        <Checkbox
          label={
            <Typography variant="small" color="gray" className="flex items-center font-normal">
              我已阅读并同意
              <a 
                className="text-blue-600 hover:underline" 
                href="https://about.yaozh.com/UserAgreement.html"
                target="_blank">
                《用户协议》
              </a>
              和
              <a 
                className="text-blue-600 hover:underline"
                href="https://about.yaozh.com/PrivacyProtection.html"
                target="_blank">
                《隐私政策》
              </a>
              ，如有任何问题，请联系
              <a 
                className="text-blue-600 hover:underline"
                href={`https://affim.baidu.com/unique_${userInfo?.userId}/chat?siteId=22077561&userId=${userInfo?.userId}&siteToken=3ec9885e53d7f539b0e681159ec00aca&cp=&cr=&cw=Chatmeds`}
                target="_blank">
                在线客服
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
          crossOrigin={undefined}
        />
        <Button className="mt-6 text-md font-normal bg-[rgba(0,47,168,1)]" fullWidth>
          提交
        </Button>
      </form>
    </DialogBody>
    <DialogFooter>
      <></>
    </DialogFooter>
  </Dialog>
  );
}