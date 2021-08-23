# 短網址產生器(url-shortener)

## 簡介
使用者可以：
1. 畫面上有一個輸入欄位，把網址放進去，再按下送出的按鈕，可以得到一個短網址，如 ```https://cryptic-beach-00235.herokuapp.com/url/6y7UP```
2. 畫面出現短網址後，可以點選複製的按鈕，即複製好了畫面上的短網址
3. 畫面出現短網址後，可以直接點選該網址，會直接連去縮短前，原始網址之網站
## 下載repo
（兩種下載法二擇一）
1. 使用cmd下載
   ```bash
   git clone git@github.com:jadokao/url-shortener.git
   ```
2. 直接下載：
   1. 點選綠色框框的『Code』
   2. 點選『Download ZIP』
## 安裝方法
1. 打開cmd，將路徑切至資料夾
2. 安裝套件：
    ```bash
    npm install
    ```
3. 安裝種子檔：
    ```bash
    npm install seed
    ```
4. 執行：
    ```bash
    npm run dev
    ```
5. 離開：使用```ctrl + c```或```cmd + c```
## 相關套件與版本
##### 檔案管理相關
* npm：7.7.6
* express: 4.17.1
* express handlebars: 5.3.3
* nodemon: 2.0.9
* body-parser: 1.19.0
* mongoose: 5.13.7
* method-override: 3.0.0
* nanoid: 3.1.25
* clipboardy: 2.3.0
##### 視覺效果相關
* jquery: 3.6.0
* popper: v2.9.1
* bootstrap: v4.6.0