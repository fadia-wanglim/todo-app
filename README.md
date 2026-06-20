# สมุดทำสิ่งนี้ (To-Do List)

โปรเจกต์ React สำหรับฝึกใช้งาน Git/GitHub และพื้นฐาน React (state, การเพิ่ม/ลบ/แก้ไขรายการ)

## วิธีรันโปรเจกต์

1. ติดตั้งไลบรารีที่ต้องใช้ (ทำครั้งแรกครั้งเดียว)
   ```
   npm install
   ```
2. รันเซิร์ฟเวอร์สำหรับพัฒนา
   ```
   npm run dev
   ```
3. เปิดลิงก์ที่ปรากฏใน terminal (ปกติคือ `http://localhost:5173`)

## วิธี push ขึ้น GitHub

ในโฟลเดอร์โปรเจกต์นี้ รันคำสั่งตามลำดับ:

```
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ชื่อบัญชี/ชื่อ-repo.git
git push -u origin main
```

(ต้องไปสร้าง repository ใหม่บนเว็บ GitHub ก่อน แล้วคัดลอกลิงก์มาแทนที่ `https://github.com/ชื่อบัญชี/ชื่อ-repo.git`)
