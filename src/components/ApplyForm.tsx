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

const departments = ["销售部","市场部","研发部","质量部","生产部","医学部","注册部","临床部","BD部","投资/战略/NPP","市场准入/政府事务","其他部门"]

// 药小智申请表单
export function ApplyForm ({open, handleOpen}) {
  // return(
  //   <div className="fixed inset-0 h-full w-full bg-gray-900/60 z-50">
  //     <div className="bg-white border-px border-black mt-[30%]">
  //       <h3>【药智生物医药行业大模型】内测申请表</h3>
  //       <p>
  //         亲爱的药智用户：
  //         感谢您对药智网的支持与信赖！我们诚邀您作为首批种子用户，参与【药智生物医药行业大模型】内测​​。
  //         该大模型依托“药智数据”,“药智医械数据”等 ​​400+专业数据库​​及数千亿级高质量行业数据​​集构建而成，特别推出基于此模型的生物医药行业AI助手——​​“药小智”​​，旨在​​显著提升您在生物医药领域的情报获取与科学研究工作效率​​。
  //         <br/><br/>
  //         【药智生物医药行业大模型】目前处于关键内测阶段，为了给您提供更好的产品与服务，当您成功提交此报名表时，即表示您同意我们在内测期间收集您的使用反馈​​。您提供的宝贵意见将用于加速模型及应用优化，期待您的参与，共同塑造生物医药AI未来！
  //       </p>
  //       <div className="">
  //         <label>
  //           <span className="text-red-900">*</span>01
  //           <input></input>
  //         </label>
  //       </div>
  //     </div>
  //   </div>);
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [position, setPosition] = useState("");
  const [requirement, setRequirement] = useState("");
  const [checked, setChecked] = useState(false);
  return (
  //   <div className="fixed inset-0 h-full w-full bg-gray-900/60 z-50">
  //    <Card color="transparent" shadow={false} className="bg-white w-[50%]">
  //     <Typography variant="h4" color="blue-gray">
  //       药智生物医药行业大模型】内测申请表
  //     </Typography>
  //     <Typography color="gray" className="mt-1 font-normal">
  //       亲爱的药智用户：
  //       感谢您对药智网的支持与信赖！我们诚邀您作为首批种子用户，参与【药智生物医药行业大模型】内测​​。
  //       该大模型依托“药智数据”,“药智医械数据”等 ​​400+专业数据库​​及数千亿级高质量行业数据​​集构建而成，特别推出基于此模型的生物医药行业AI助手——​​“药小智”​​，旨在​​显著提升您在生物医药领域的情报获取与科学研究工作效率​​。
  //       <br/><br/>
  //       【药智生物医药行业大模型】目前处于关键内测阶段，为了给您提供更好的产品与服务，当您成功提交此报名表时，即表示您同意我们在内测期间收集您的使用反馈​​。您提供的宝贵意见将用于加速模型及应用优化，期待您的参与，共同塑造生物医药AI未来！
  //     </Typography>
  //     <form className="mt-8 mb-2 max-w-screen-lg w-full sm:w-[800px] self-center">
  //       <div className="mb-1 grid grid-cols-1 sm:grid-cols-2 gap-6 ">
  //         {/* 每项表单输入组 */}
  //         <div>
  //           <Typography variant="h6" color="blue-gray" className="mb-1">
  //             <span className="text-red-900">*</span>01 公司
  //           </Typography>
  //           <Input
  //             size="lg"
  //             placeholder="请输入公司名称"
  //             className="!border-t-blue-gray-200 focus:!border-t-gray-900"
  //             labelProps={{ className: "before:content-none after:content-none" }}
  //             crossOrigin={undefined}
  //           />
  //         </div>

  //         <div>
  //           <Typography variant="h6" color="blue-gray" className="mb-1">
  //             <span className="text-red-900">*</span>02 姓名
  //           </Typography>
  //           <Input
  //             size="lg"
  //             placeholder="请输入姓名"
  //             className="!border-t-blue-gray-200 focus:!border-t-gray-900"
  //             labelProps={{ className: "before:content-none after:content-none" }}
  //             crossOrigin={undefined}
  //           />
  //         </div>

  //         <div>
  //           <Typography variant="h6" color="blue-gray" className="mb-1">
  //             <span className="text-red-900">*</span>03 手机号
  //           </Typography>
  //           <Input
  //             variant="outlined"
  //             maxLength={11}
  //             type="number"
  //             size="lg"
  //             placeholder="e.g.，13xxxxxxxxx"
  //             className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
  //             labelProps={{ className: "before:content-none after:content-none" }}
  //             crossOrigin={undefined}
  //           />
  //         </div>

  //         <div>
  //           <Typography variant="h6" color="blue-gray" className="mb-1">
  //             <span className="text-red-900">*</span>04 部门
  //           </Typography>
  //           <Select label="请选择所在部门">
  //             {departments.map((dep, key) => {
  //               return <Option key={key}>{dep}</Option>
  //             })}
  //           </Select>
  //         </div>

  //         <div>
  //           <Typography variant="h6" color="blue-gray" className="mb-1">
  //             <span className="text-red-900">*</span>05 职位
  //           </Typography>
  //           <Input
  //             size="lg"
  //             placeholder="请输入职位"
  //             className="!border-t-blue-gray-200 focus:!border-t-gray-900"
  //             labelProps={{ className: "before:content-none after:content-none" }}
  //             crossOrigin={undefined}
  //           />
  //         </div>

  //         <div className="col-span-2">
  //           <Typography variant="h6" color="blue-gray" className="mb-1">
  //             <span className="text-red-900">*</span>06 需求
  //           </Typography>
  //           <Textarea
  //             size="lg"
  //             placeholder="请输入你的需求"
  //             className="!border-t-blue-gray-200 focus:!border-t-gray-900"
  //             labelProps={{ className: "before:content-none after:content-none" }}
  //           />
  //         </div>
  //       </div>

  //       {/* checkbox 和按钮继续放在表单底部 */}
  //       <Checkbox
  //         label={
  //           <Typography variant="small" color="gray" className="flex items-center font-normal">
  //             我同意
  //             <a href="#" className="font-medium transition-colors hover:text-gray-900">
  //               &nbsp;服务条款
  //             </a>
  //           </Typography>
  //         }
  //         containerProps={{ className: "-ml-2.5" }}
  //         crossOrigin={undefined}
  //       />
  //       <Button className="mt-6" fullWidth>
  //         提交申请
  //       </Button>
  //     </form>
  //   </Card>
  // </div>
  <Dialog open={open} handler={handleOpen} className="">
    <DialogHeader>内测申请</DialogHeader>
    <DialogBody className="">
      <form className="mt-8 mb-2 max-w-screen-lg w-full self-center">
        <div className="mb-1 grid grid-cols-1 sm:grid-cols-2 gap-6 ">
          {/* 每项表单输入组 */}
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-1">
              <span className="text-red-900">*</span>公司
            </Typography>
            <Input
              size="lg"
              maxLength={100}
              placeholder="请输入公司名称"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{ className: "before:content-none after:content-none" }}
              crossOrigin={undefined}
            />
          </div>

          <div>
            <Typography variant="h6" color="blue-gray" className="mb-1">
              <span className="text-red-900">*</span>姓名
            </Typography>
            <Input
              size="lg"
              placeholder="请输入姓名"
              maxLength={30}
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{ className: "before:content-none after:content-none" }}
              crossOrigin={undefined}
            />
          </div>

          <div>
            <Typography variant="h6" color="blue-gray" className="mb-1">
              <span className="text-red-900">*</span>手机号
            </Typography>
            <Input
              variant="outlined"
              maxLength={11}
              type="number"
              size="lg"
              placeholder="e.g.，13xxxxxxxxx"
              className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              labelProps={{ className: "before:content-none after:content-none" }}
              crossOrigin={undefined}
            />
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-1">
              <span className="text-red-900">*</span>验证码
            </Typography>
            <Input
                type="number"
                className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                containerProps={{
                  className: "min-w-0",
                }} 
                crossOrigin={undefined}/>
            <Button
              size="sm"
              color={ phone ? "gray" : "blue-gray"}
              disabled={!phone}
              className="absolute top-[11.25rem] left-[41rem]"
            >
              发送验证码
            </Button>
          </div>

          <div>
            <Typography variant="h6" color="blue-gray" className="mb-1">
              <span className="text-red-900">*</span>部门
            </Typography>
            <Select label="请选择所在部门">
              {departments.map((dep, key) => {
                return <Option key={key}>{dep}</Option>
              })}
            </Select>
          </div>

          <div>
            <Typography variant="h6" color="blue-gray" className="mb-1">
              <span className="text-red-900">*</span>职位
            </Typography>
            <Input
              size="lg"
              placeholder="请输入职位"
              maxLength={30}
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{ className: "before:content-none after:content-none" }}
              crossOrigin={undefined}
            />
          </div>

          <div className="col-span-2">
            <Typography variant="h6" color="blue-gray" className="mb-1">
              <span className="text-red-900">*</span>需求
            </Typography>
            <Textarea
              size="lg"
              placeholder="请输入你的需求"
              maxLength={200}
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{ className: "before:content-none after:content-none" }}
            />
          </div>
        </div>

        {/* checkbox 和按钮继续放在表单底部 */}
        <Checkbox
          label={
            <Typography variant="small" color="gray" className="flex items-center font-normal">
              我已阅读并同意
              <a className="text-blue-600 hover:underline">《用户协议》</a>
              和
              <a className="text-blue-600 hover:underline">《隐私政策》</a>
              ，如有任何问题，请联系
              <a className="text-blue-600 hover:underline">在线客服</a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
          crossOrigin={undefined}
        />
        <Button className="mt-6" fullWidth>
          提交申请
        </Button>
      </form>
    </DialogBody>
    <DialogFooter>
      <></>
    </DialogFooter>
  </Dialog>
  );
}