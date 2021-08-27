
class Untils {
  /**
   * 通过传入的children字段名，将多层级的对象打平为一个数组
   * @param {T} source
   * @param {string} children
   * @returns {T[]}
   * 例如  [{id: 1, children: [{id: 2}]}] => [{id: 1}, {id: 2}]
   */
  flatObject(source, children = "children") {
    const re = [];
    const clone = JSON.parse(JSON.stringify(source));
    this.flatObjectDo(clone, children, re);
    return re;
  }


  /**
   * 获取字符串str 中的char字符数, 你可以使用它来获取空格数和随后的单词数，或者这可用于获取字符串中某个分隔符的计数。
   * @param {string} str
   * @param {string} char
   * @returns {Number}
   * 例如  characterCount('sadwq-dqwd-wqd','-')  => 2
   */
  characterCount = (str, char) => str.split(char).length - 1;

  /**
   * 检查对象是否为空
   * @param {string} str
   * @param {string} char
   * @returns {Number}
   * 例如  characterCount('sadwq-dqwd-wqd','-')  => 2
   */


    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  2、

  检查对象的空性实际上比看起来要困难得多。每次检查对象是否等于 {}
  /**
  都会返回 false，即使该对象为空。

幸运的是，下面的单行代码正是我们想要的。

图片
const isEmpty = obj => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object
在这一行中，我们检查对象的键的长度是否等于 0，以及传递的参数是否为实际对象。

3、等待一定时间后执行

在这个单行代码中，我们将接触一些异步编程。这个想法很简单。

在运行代码时，如果你想等待一定的时间，这里是wait one-liner：

图片
const wait = async (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
在wait one-liner中，我们创建一个promise并在给定的时间后使用setTimeout函数解决它。

4、获取两个日期之间的天差

在开发 Web 应用程序时，日期通常是最容易混淆的部分，因为有许多概念很容易被误算。

这是一个强大的单行程序来计算两个日期之间的天差。但还有更多的事情要做。和我一样，你可以创建自己的单线来计算月、年差等。

图片
const daysBetween = (date1, date2) => Math.ceil(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24))
这种单行背后的逻辑很容易理解。当两个日期相减时，返回值是以毫秒为单位的差值。要将毫秒转换为天，我们必须将其分别除以毫秒、秒、分钟和小时。

5、重定向到另一个 URL

如果你曾经创建过一个真实的网站，我敢肯定你会遇到身份验证逻辑。例如，非管理员用户不应该能够访问 /admin 路由。如果用户尝试，那么，你必须将其重定向到另一个 URL。

这种单线正好适用于我上面提到的情况，但我认为你可以找到更多的用例。

图片
const redirect = url => location.href = url
location 是全局 window 对象上的一个方法，设置 href 属性的行为与用户点击链接的行为相同。

6、检查设备上的触摸支持

随着可以连接到互联网的设备越来越多，创建响应式网站的必要性也越来越高。20 年前，开发者应该考虑过桌面版网站，但今天超过 50% 的网络流量来自触摸设备。

因此，基于设备的触摸支持采取一些行动是一个如此重要的概念。

图片
const touchSupported = () => ('ontouchstart' in window || DocumentTouch && document instanceof DocumentTouch)
在这一行中，我们正在检查文档是否支持 touchstart 事件。

7、在元素后插入一串 HTML

开发 Web 应用程序，使用 JavaScript 更新 DOM 是一件很常见的事情。有一些基本的方法可以完成工作，但是当情况变得复杂时，就很难克服。

这是在 HTML 元素之后立即注入一串 HTML 的单行代码。通过几分钟的思考和谷歌搜索，我相信你可以找到这个单行的之前版本。

图片
const insertHTMLAfter = (html, el) => el.insertAdjacentHTML('afterend', html)
8、打乱数组在开发中混洗一组数据是你随时可能遇到的常见情况，不幸的是，JavaScript 中没有内置数组的混洗方法。但是，这是你可以每天使用的 shuffle one-liner：图片

const shuffle = arr => arr.sort(() => 0.5 - Math.random())
它利用数组的排序方法，在数组的前一个元素之前或之后进行随机排序。

9、在网页上获取选定的文本

浏览器在全局 windows 对象上有一个名为 getSelection 的内置方法。

使用此方法，你可以创建一个单行，返回网页上突出显示或选定的文本。

图片
const getSelectedText = () => window.getSelection().toString()
10、 获取一个随机布尔值

在编程时，尤其是在编写游戏时，有时你会想要随机采取行动。在这种情况下，下面的单行非常方便。

图片
const getRandomBoolean = () => Math.random() >= 0.5
上面的单行有 50/50 的机会返回 true 或 false。因为生成的随机数大于 0.5 的概率等于较小的概率。

但是，例如，如果你想获得一个概率为 70% 错误的随机布尔值，那么，你可以简单地将 0.5 更改为 0.7，依此类推。

11、计算数组的平均值

可以使用多种方法计算数组的平均值。但道理对所有人都是一样的。你必须获得数组及其长度的总和；然后除法给出平均值。

图片
const average = (arr) => arr.reduce((a, b) => a + b) / arr.length
在平均单行中，我们使用 reduce 来获取一行中的数组的总和，而不是使用循环。然后，我们将其除以数组长度，这是数组的平均值。





//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


}
   **/
export const utils = new Utils();
