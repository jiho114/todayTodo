import { useContext } from "react";
import { RecommendContext } from "../context/Recommend";

import { MdSunny } from "react-icons/md";
import { IoIosPartlySunny } from "react-icons/io";
import { FaCloudRain } from "react-icons/fa";
import { FaRegSnowflake } from "react-icons/fa";
import { FaRegLaughBeam } from "react-icons/fa";
import { IoHappyOutline } from "react-icons/io5";
import { BsEmojiExpressionless } from "react-icons/bs";

import { Select, Typography, Button, Input, Card } from "antd";

const { Option } = Select;
const { Text } = Typography;

const MainTop = ({todoInput, setTodoInput, handleAddTodo, handleAddRecommendation}) => {
  const { weather, energyLevel, setEnergyLevel, randomRecommendation } =
    useContext(RecommendContext);



  return (
    <div className="main-top">
      <div className="main-top-left">
        <div className="weather-text">
          <Text strong>오늘의 날씨는 {weather}이며, 에너지 레벨은 </Text>
          <Select value={energyLevel} onChange={setEnergyLevel}>
            <Option value="높음">높음</Option>
            <Option value="보통">보통</Option>
            <Option value="낮음">낮음</Option>
          </Select>
          <Text strong> 입니다.</Text>
        </div>
        <Text style={{fontSize:24}}>
          {weather === "맑음"
            ? `날씨는 화창하고, 에너지는 ${energyLevel}이니 ${randomRecommendation} 어때요?`
            : weather === "흐림"
            ? `날씨는 흐리고, 에너지는 ${energyLevel}이니 ${randomRecommendation} 어때요?`
            : weather === "비"
            ? `비가 추적추적, 에너지는 ${energyLevel}이니 ${randomRecommendation} 어때요?`
            : weather === "눈"
            ? `눈 내리는 포근한 날이네요. 에너지는 ${energyLevel}이니 ${randomRecommendation} 할까요?`
            : "자유롭게 시간을 보내봐요."}
        </Text>
        <Button onClick={handleAddRecommendation} type="primary">할일에 추가할게요</Button>
      </div>
      <Card className="main-top-right">
        <ul className="main-weather-energy">
          <li className="weather">
            <div>
              {weather === "맑음" ? (
                <MdSunny className="icon" style={{color:"gold"}} />
              ) : weather === "흐림" ? (
                <IoIosPartlySunny style={{color:"gray"}} className="icon"/>
              ) : weather === "비" ? (
                <FaCloudRain style={{color:"skyblue"}} className="icon"/>
              ) : weather === "눈" ? (
                <FaRegSnowflake style={{color:"lightblue"}} className="icon"/>
              ) : (
                "등록된 날씨 정보가 없어요."
              )}
            </div>
            <p>{weather}</p>
          </li>
          <li className="energy">
            <div>
              {energyLevel === "높음" ? (
                <FaRegLaughBeam style={{color:"skyblue"}} className="icon"/>
              ) : energyLevel === "보통" ? (
                <IoHappyOutline style={{color:"lightgreen"}} className="icon"/>
              ) : energyLevel === "낮음" ? (
                <BsEmojiExpressionless style={{color:"red"}} className="icon"/>
              ) : (
                "에너지 레벨을 선택해 주세요."
              )}
            </div>
            <p>
              {energyLevel === "높음"
                ? "활기차요"
                : energyLevel === "보통"
                ? "나쁘지 않아요"
                : energyLevel === "낮음"
                ? "휴식이 필요해요"
                : "에너지 레벨을 선택해 주세요."}
            </p>
          </li>
        </ul>
        <div className="main-input-area">
          <Input value={todoInput} placeholder="할일을 입력해 주세요." onChange={(e) => setTodoInput(e.target.value)} />
          <Button onClick={handleAddTodo} type="primary">추가하기</Button>
        </div>
      </Card>
    </div>
  );
};

export default MainTop;
