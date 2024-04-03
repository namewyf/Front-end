
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

let storyText = "今天气温 34 摄氏度，:inserta:出去遛弯。当走到:insertb:门前时，突然就:insertc:。人们都惊呆了，李雷全程目睹但并没有慌，因为:inserta:是一个 130 公斤的胖子，天气又辣么热。";
let insertX = [
"怪兽威利",
"大老爹",
"圣诞老人"];

let insertY = [
"肯德基",
"迪士尼乐园",
"白宫"];
let insertZ = [
"自燃了",
"在人行道化成了一坨泥",
"变成一条鼻涕虫爬走了"];
// 接下来将 newStory 中的占位符
// （:inserta:、:insertb: 和 :insertc: ）
// 替换为 xItem、yItem 和 zItem。有专用的字符串方法可供使用，
// 并用该方法的返回值为 newStory 赋值。
// 每当按下按钮时，这些占位符都会替换为随机的笑话字符串。
// 再给你一点提示，我们所说的这种方法每次只会将所找到的首个子字符串进行替换，
// 因此该方法对某个占位符需要执行两次。
randomize.addEventListener('click', result);

function result() {
	let newStory = storyText;
	xItem = randomValueFromArray(insertX);
	yItem = randomValueFromArray(insertY);
	zItem = randomValueFromArray(insertZ);
	newStory = newStory.replace(':inserta:',xItem);
	newStory = newStory.replace(':inserta:',xItem);
	newStory = newStory.replace(':insertb:',yItem);
	newStory = newStory.replace(':insertc:',zItem);
  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace('李雷',name);
  }
//   在第二个 if 块中检查 american 单选按钮是否被选中。
//   如果选中，就要将故事中的重量和温度值从公斤和摄氏度转换为磅和华氏度，
//   具体事项如下：
//   确定英美单位的转换公式。
// 定义变量 weight、temperature 的行中，分别将美制单位按公式转化为英制，
// 用 Math.round() 对计算结果取整。然后将英式单位连接到末尾。
// 就在上述两个变量的定义下方增加两个字符串置换操作，
// 将“35 摄氏度”替换为 temperature 的值，将“140 公斤”替换为 weight 的值。
  if(document.getElementById("american").checked) {
    let weight = Math.round(34*9/5+32)+"华氏度";
    let temperature = Math.round(130*2.2046)+"镑";
    newStory = newStory.replace(' 34 摄氏度',temperature);
    newStory = newStory.replace(' 130 公斤',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}