## demo

> http://yangchaojie.top:3000

## my-vue-cli

> my vue cli

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```



## 脚手架功能

>> 本脚手架在vue-cli 的基础上扩展了一些功能

1. 结合axios 拦截器 做到的接口授权验证功能，没有token或token不正确则跳转登录页
2. 结合vue-router 实现前台页面间未登录状态的拦截 
3. 使用vuex 保存token方便存取（使用localstorage持久化）
4. 使用Hmacsha256 做参数 摘要验证，识别请求伪造
5. 使用amfe-flexible 做REM适配
6. 结合mint-ui 做UI框架，适用快速开发
7. 提供一些工具方法 saveAsFile（文件流保存为文件）downloadImg（下载图片）myBrowser（判断当前浏览器）isMobile（判断手机端）formatDate（格式化时间）




--------------------胖子节

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">

<head>

    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">

    <title>Document</title>

    <style type="text/css">
        * {
            margin: 0;
            padding: 0;
        }
        
        #yixing {
            width: 670px;
            height: 221px;
            background: url(images/pic_bg.gif) no-repeat;
            margin: 100px auto;
            position: relative;
            overflow: hidden;
        }
        
        .anniu .zuoanniu {
            display: block;
            width: 43px;
            height: 43px;
            position: absolute;
            top: 150px;
            left: 23px;
            cursor: pointer;
        }
        
        .anniu .youanniu {
            display: block;
            width: 43px;
            height: 43px;
            position: absolute;
            top: 150px;
            right: 23px;
            cursor: pointer;
        }
        
        #yixing ul {
            list-style: none;
        }
        
        #yixing ul li {
            position: absolute;
            text-align: center;
        }
        
        #yixing ul li p {
            opacity: 0;
        }
        
        .no3 p {
            opacity: 1 !important;
        }
        
        #yixing ul li img {
            width: 100%;
            height: 100%;
        }
        
        #yixing ul li.no0 {
            width: 48px;
            height: 32px;
            top: 93px;
            left: -70px;
        }
        
        #yixing ul li.no1 {
            width: 80px;
            height: 54px;
            top: 71px;
            left: 23px;
        }
        
        #yixing ul li.no2 {
            width: 100px;
            height: 78px;
            top: 47px;
            left: 127px;
        }
        
        #yixing ul li.no3 {
            width: 144px;
            height: 109px;
            top: 16px;
            left: 254px;
        }
        
        #yixing ul li.no4 {
            width: 100px;
            height: 78px;
            top: 47px;
            left: 426px;
        }
        
        #yixing ul li.no5 {
            width: 80px;
            height: 54px;
            top: 71px;
            left: 556px;
        }
        
        #yixing ul li.no6 {
            width: 48px;
            height: 32px;
            top: 93px;
            left: 693px;
        }
        
        #yixing ul li.denghou {
            display: none;
        }
    </style>

    <script type="text/javascript" src="jquery-1.11.1.min.js"></script>

    <script type="text/javascript">
        $(document).ready(

            function() {

                var json0 = {
                    "width": 48,
                    "height": 32,
                    "top": 93,
                    "left": -70
                };

                var json1 = {
                    "width": 80,
                    "height": 54,
                    "top": 71,
                    "left": 23
                }

                var json2 = {
                    "width": 100,
                    "height": 78,
                    "top": 47,
                    "left": 127
                }

                var json3 = {
                    "width": 144,
                    "height": 109,
                    "top": 16,
                    "left": 254
                }

                var json4 = {
                    "width": 100,
                    "height": 78,
                    "top": 47,
                    "left": 426
                }

                var json5 = {
                    "width": 80,
                    "height": 54,
                    "top": 71,
                    "left": 556
                }

                var json6 = {
                    "width": 48,
                    "height": 32,
                    "top": 93,
                    "left": 693
                }



                $(".youanniu").click(

                    function() {

                        if (!$("#yixing li").is(":animated")) {

                            //先交换位置

                            $(".no1").animate(json0, 400);

                            $(".no2").animate(json1, 400);

                            $(".no3").animate(json2, 400);

                            $(".no4").animate(json3, 400);

                            $(".no5").animate(json4, 400);

                            $(".no6").animate(json5, 400);

                            $(".no0").css(json6);



                            //再交换身份

                            $(".no0").attr("class", "denghou");

                            $(".no1").attr("class", "no0");

                            $(".no2").attr("class", "no1");

                            $(".no3").attr("class", "no2");

                            $(".no4").attr("class", "no3");

                            $(".no5").attr("class", "no4");

                            $(".no6").attr("class", "no5");

                            //上面的交换身份，把no0搞没了！所以，我们让no1前面那个人改名为no0

                            if ($(".no5").next().length != 0) {

                                //如果no5后面有人，那么改变这个人的姓名为no6

                                $(".no5").next().attr("class", "no6");

                            } else {

                                //no5前面没人，那么改变此时队列最开头的那个人的名字为no0

                                $("#yixing li:first").attr("class", "no6");

                            }



                            //发现写完上面的程序之后，no6的行内样式还是json0的位置，所以强制：

                            $(".no6").css(json6);

                        }

                    }

                );



                $(".zuoanniu").click(

                    function() {

                        if (!$("#yixing li").is(":animated")) {

                            $(".no0").animate(json1, 400);

                            $(".no1").animate(json2, 400);

                            $(".no2").animate(json3, 400);

                            $(".no3").animate(json4, 400);

                            $(".no4").animate(json5, 400);

                            $(".no5").animate(json6, 400);

                            $(".no6").css(json0);



                            $(".no6").attr("class", "denghou");

                            $(".no5").attr("class", "no6");

                            $(".no4").attr("class", "no5");

                            $(".no3").attr("class", "no4");

                            $(".no2").attr("class", "no3");

                            $(".no1").attr("class", "no2");

                            $(".no0").attr("class", "no1");



                            //上面的交换身份，把no0搞没了！所以，我们让no1前面那个人改名为no0

                            if ($(".no1").prev().length != 0) {

                                //如果no1前面有人，那么改变这个人的姓名为no0

                                $(".no1").prev().attr("class", "no0");

                            } else {

                                //no1前面没人，那么改变此时队列最后的那个人的名字为no0

                                $("#yixing li:last").attr("class", "no0");

                            }



                            $(".no0").css(json0);

                        }

                    }

                );

            }

        );
    </script>

</head>

<body>

    <div id="yixing">

        <ul>

            <li class="denghou">
                <img src="images/0.png" />
                <p>images/0.png</p>
            </li>

            <li class="denghou">
                <img src="images/1.png" />
                <p>images/1.png</p>
            </li>

            <li class="no0">
                <img src="images/2.png" />
                <p>images/2.png</p>
            </li>

            <li class="no1">
                <img src="images/3.png" />
                <p>images/3.png</p>
            </li>

            <li class="no2">
                <img src="images/4.png" />
                <p>images/4.png</p>
            </li>

            <li class="no3">
                <img src="images/5.png" />
                <p>images/5.png</p>
            </li>

            <li class="no4">
                <img src="images/6.png" />
                <p>images/6.png</p>
            </li>

            <li class="no5">
                <img src="images/7.png" />
                <p>images/7.png</p>
            </li>

            <li class="no6">
                <img src="images/8.png" />
                <p>images/8.png</p>
            </li>

            <li class="denghou">
                <img src="images/9.png" />
                <p>images/9.png</p>
            </li>

            <li class="denghou">
                <img src="images/10.png" />
                <p>images/10.png</p>
            </li>

        </ul>

        <div class="anniu">

            <span class="zuoanniu"></span>

            <span class="youanniu"></span>

        </div>

    </div>

</body>

</html>
