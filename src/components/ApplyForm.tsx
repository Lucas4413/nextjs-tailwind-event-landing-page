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
import { useState, useEffect } from "react";
import { isValidChinesePhoneNumber } from "@/utility/utils";
import axios from 'axios';
import { SuccessfulWindow } from "./SuccessfulWindow";

const departments = [
  { label: "销售部", value: "1" },
  { label: "市场部", value: "2" },
  { label: "研发部", value: "3" },
  { label: "质量部", value: "4" },
  { label: "生产部", value: "5" },
  { label: "医学部", value: "6" },
  { label: "注册部", value: "7" },
  { label: "临床部", value: "8" },
  { label: "BD部", value: "9" },
  { label: "投资/战略/NPP", value: "10" },
  { label: "市场准入/政府事务", value: "11" },
  { label: "其他（请填写）", value: "12" },
];


// 药小智申请表单
export function ApplyForm ({open, handleOpen}) {
  const {userInfo} = useGlobalStates();
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [validPhone, setValidPhone] = useState(true);
  const [vCode, setVCode] = useState("");
  const [department, setDepartment] = useState("");
  const [otherDepartment, setOtherDepartment] = useState("");
  const [position, setPosition] = useState("");
  const [requirement, setRequirement] = useState("");
  const [checked, setChecked] = useState(false);
  const [timer, setTimer] = useState(0); //验证码倒计时状态
  const [selectOpen, setSelectOpen] = useState(false); // 部门选择列表开启/关闭状态
  const [loading, setLoading] = useState(false);

  const [successOpen, setSuccessOpen] = useState(false); // 控制提交成功窗口

  // 倒计时函数
  useEffect(() => {
    let countdown;
    if (timer > 0) {
      countdown = setTimeout(() => setTimer(timer - 1), 1000);
    }
    return () => clearTimeout(countdown);
  }, [timer]);

  const handleGetVCode = async () => {
    setValidPhone(true);
    const verifyRes = isValidChinesePhoneNumber(phone);

    if (!verifyRes) {
      setValidPhone(false);
      return;
    }

    try {
      const response = await fetch('https://yzchat-dev.yaozh.com/yzchat/web/chatmeds/sendverify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobile: phone }),
      });
      const data = await response.json();
      if (data.code === "0") {
        alert('验证码已发送');
        setTimer(60); // 启动倒计时
      } else {
        alert(data.message || '验证码发送失败');
        
      }
    } catch (error) {
      console.log(error);
      alert('网络错误，验证码发送失败');
    }
  }

  const handleSubmit = async () => {
    if (loading) return; // 防重复点击

    // 1. 校验
    if (!company.trim()) return alert("请输入公司名称");
    if (!name.trim()) return alert("请输入姓名");

    const valid = isValidChinesePhoneNumber(phone);
    if (!valid) {
      setValidPhone(false);
      return alert("请输入有效的手机号码");
    } else {
      setValidPhone(true);
    }

    if (!vCode.trim()) return alert("请输入验证码");
    if (!department) return alert("请选择所在部门");

    if (department === "12" && !otherDepartment.trim()) {
      return alert("请选择“其他部门”时，必须填写部门名称");
    }

    if (!position.trim()) return alert("请输入职位");
    if (!requirement.trim()) return alert("请描述您的业务需求");
    if (!checked) return alert("请勾选同意《用户协议》和《隐私政策》");

    // 2. 组织请求体
    const payload = {
      company,
      department: Number(department),
      other_department: department === "12" ? otherDepartment : "",
      name,
      mobile: phone,
      position,
      demand: requirement,
      verify_code: vCode,
    };

    // 3. 发起请求
    setLoading(true);
    try {
      const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
      const res = await axios.post(`${BASE_URL}/yzchat/web/chatmeds/trialapply`, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = res.data;
      if (data.code === "0") {
        handleOpen(); // 关闭表单弹窗
        setSuccessOpen(true); // 打开成功弹窗
      } else {
        alert(data.message || "提交失败，请稍后再试");
      }
    } catch (error) {
      console.error("提交错误：", error);
      alert("提交失败，请检查网络或稍后再试");
      setSuccessOpen(true);
    } finally {
    setLoading(false);
    }
  };


  return (
  <>
  <Dialog open={open} handler={handleOpen} className="">
    <DialogHeader className="justify-between text-base">
      <span>内测申请</span>
      <i className="fa-solid fa-xmark" onClick={handleOpen}></i>
    </DialogHeader>
    <DialogBody className="pt-[0.25rem]">
      <form className="mb-2 max-w-screen-lg w-full self-center">
        <div className="mb-1 grid grid-cols-1 sm:grid-cols-2 gap-[1.25rem] ">
          {/* 每项表单输入组 */}
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-1">
              <span className="text-[rgba(255,77,77,1)]">*</span> 公司
            </Typography>
            <Input
              size="lg"
              maxLength={100}
              placeholder="请输入公司名称"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              size="lg"
              placeholder="请输入手机号码"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 ${validPhone ? 'focus:!border-[rgba(0,47,168,1)]' : 'focus:!border-[rgba(255,77,77,1)]'} [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`}
              labelProps={{ className: "before:content-none after:content-none" }}
              crossOrigin={undefined}
            />
            {validPhone ? "" : 
            <Typography className="text-[rgba(255,77,77,1)] text-xs">
              请输入有效的手机号码
            </Typography>}
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-1">
              <span className="text-[rgba(255,77,77,1)]">*</span> 验证码
            </Typography>
            <div className="flex gap-4">
              <Input
                size="lg"
                placeholder="请输入验证码"
                value={vCode}
                onChange={(e) => setVCode(e.target.value)}
                maxLength={10}
                className="!border-t-blue-gray-200 focus:!border-[rgba(0,47,168,1)]"
                labelProps={{ className: "before:content-none after:content-none" }}
                crossOrigin={undefined}
              />
              <Button
                size="sm"
                disabled={!phone || timer > 0}
                className={`w-full text-white ${
                  phone && timer === 0 ? 'bg-[rgba(0,47,168,1)]' : 'bg-gray-900 cursor-not-allowed'
                }`}
                onClick={handleGetVCode}
              >
                {timer > 0 ? `重新获取(${timer}s)` : '点击获取'}
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
                setSelectOpen(false);
              }}
              className={`!border-t-blue-gray-200
              ${selectOpen ? "!border-[rgba(0,47,168,1)]" : ""}
              focus:!border-[rgba(0,47,168,1)]`}
              onClick={() => {setSelectOpen(!selectOpen)}}
            >
              {departments.map((dep) => (
                <Option key={dep.value} value={dep.value}>
                  {dep.label}
                </Option>
              ))}
            </Select>
            {department === "12" && (
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
              value={position}
              onChange={(e) => setPosition(e.target.value)}
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
              value={requirement}
              onChange={(e) => setRequirement(e.target.value)}
              className="!border-t-blue-gray-200 focus:!border-[rgba(0,47,168,1)]"
              labelProps={{ className: "before:content-none after:content-none" }}
            />
          </div>
        </div>

        {/* checkbox 和提交按钮放在表单底部 */}
        <div className="flex flex-col items-center mx-auto">
          <Checkbox
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            label={
              <Typography variant="small" color="gray" className="font-normal leading-relaxed py-[0.675rem]">
                我已阅读并同意
                <a className="text-blue-600 hover:underline ml-1" href="https://about.yaozh.com/UserAgreement.html" target="_blank">《用户协议》</a>
                和
                <a className="text-blue-600 hover:underline mx-1" href="https://about.yaozh.com/PrivacyProtection.html" target="_blank">《隐私政策》</a>
                ，如有任何问题，请联系
                <a className="text-blue-600 hover:underline ml-1" href={`https://affim.baidu.com/unique_${userInfo?.userId}/chat?siteId=22077561&userId=${userInfo?.userId}&siteToken=3ec9885e53d7f539b0e681159ec00aca&cp=&cr=&cw=Chatmeds`} target="_blank">在线客服</a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
            crossOrigin={undefined}
          />
          <Button 
            className="text-[16px] px-[2.75rem] py-[0.625rem] font-normal bg-[rgba(0,47,168,1)]"
            onClick={handleSubmit}  
            disabled={loading}
          >
            {loading ? "提交中..." : "提交"}
          </Button>
        </div>
      </form>
    </DialogBody>
    <DialogFooter className="p-0">
      <></>
    </DialogFooter>
  </Dialog>

  <SuccessfulWindow openSuccess={successOpen} handleOpenSuccess={() => setSuccessOpen(false)} />
  </>
  );
}
