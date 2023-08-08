function Content() {
  return (
    <div className="bg-white">
      <img
        className="max-h-screen"
        src="https://www.honeykissbullz.com/images/banner/crop-1686058723719.jpg"
      />

      <div className="hero h-72 ">
        <div className="hero-content ">
          <div className="flex flex-col text-center items-center ">
            <h1 className="text-4xl font-bold text-red-500">
              Honeykissbullz Frenchbulldog
            </h1>
            <div className="max-w-md">
              <p className="py-6 text-sm">
                พวกเรา Honeykissbullz Farm เกิดขึ้นจากความรักจนกลายมาเป็น
                <p>"ฟาร์มน้องสุนัขเฟรนบูลด็อก"</p>
                <p>
                  ที่มีประสบการณ์มากกว่า 10 ปี
                  เรานำเข้าพ่อและแม่พันธ์สุนัขเข้ามาจากต่างประเทศ
                </p>
                และมาพัฒนาต่อในฟาร์มของเรา จนมีเด็กๆที่น่ารักและสุขภาพแข็งแรง
                พร้อมที่จะไปเป็นหนึ่งในสมาชิกของทุกคนในครอบครัว
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 items-center">
        <div className="flex flex-col justify-center items-center text-center">
          <img
            className="pb-4"
            style={{ width: 250 }}
            src="https://www.honeykissbullz.com/images/ready-template/crop-1686062447599.jpg"
            alt="Pizza"
          />
          <h1 className="text-2xl font-bold text-red-500 pb-4">
            คุณดิว อริสรา
          </h1>
          <p className="pb-4">คุณดิวอริสรา กับน้องเหมยลี่</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <img
            className="pb-4"
            style={{ width: 250 }}
            src="https://www.honeykissbullz.com/images/ready-template/crop-1686063414693.jpg"
            alt="Pizza"
          />
          <h1 className="text-2xl font-bold text-red-500 pb-4">คุณโจอี้บอย</h1>
          <p className="pb-4">คุณโจอี้บอย กับน้องออลลี่</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <img
            className="pb-4"
            style={{ width: 250 }}
            src="https://www.honeykissbullz.com/images/ready-template/crop-1686063526543.jpg"
            alt="Pizza"
          />
          <h1 className="text-2xl font-bold text-red-500 pb-4">
            นักฟุตบอลทีมชาติไทย
          </h1>
          <p className="pb-4">นักฟุตบอลทีมชาติไทย</p>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <Content />
    </>
  );
}

export default Home;
