import Link from 'next/link'

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kurallar ve Kullanıcı Sözleşmesi | VE3.Plus",
  description: "",
  // other metadata
};

const BlogDetailsPage = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Kurallar ve Kullanıcı Sözleşmesi
                </h2>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                  
                  
                  </div>
                 
                </div>
                <div>
                  
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      VE3.Plus bir video düzenleme otomasyonudur. Yasadışı amaçlarla kullanılması yasaktır. Bu tür durumlarda doğabilecek zararlardan yalnızca kullanıcı sorumludur. 
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      VE3.Plus yalnızca <span style={{ color: 'Lime' }}><u>Windows</u></span> işletim sistemlerinde çalışmaktadır.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Lisans süresi 30 gündür.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      VE3.Plus kademeli mod sistemine sahiptir. Dolayısıyla tüm özellikleri birbiriyle uyumlu <b>"çalışmamaktadır"</b>. Farklı özelliklerin aynı anda kullanılmaya çalışıldığı durumlarda sorunlar oluşabilir(<Link href="/sik-sorulanlar" target="_blank"><span style={{ color: 'orange' }}>detaylar</span></Link>).

                    </li>
                    
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Sistemde yer almayan özellikler sebebi ile yaşanabilecek sorunlar kullanıcının sorumluluğundadır. Sistem yalnızca vadettiği özelliklerden sorumludur.
                    </li>

                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      VE3.Plus'ın video üretim hızı sahip olduğunuz bilgisayar performansına ve boştaki işlem gücüne göre değişebilir.
                    </li>
                 
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Her yazılım gibi VE3.Plus da teknik sorunlarla karşılaşabilir. VE3.Plus'ın kendi altyapısından kaynaklanmayan durumlarda çözüm sağlanamıyorsa ilgili özellikler sistemden kaldırılabilir.

                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      VE3.Plus'ın fiyatı <u>geçici olarak</u> <span style={{ color: 'LightSkyBlue' }}>100 dolar + platform komisyonları</span>dır. 
                      
                      Sonrasında aylık <span style={{ color: 'MediumSpringGreen' }}>300 dolar + platform komisyonları</span> olacak ve <u>bu fiyat değişmeyecektir</u>.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Destek bildirimlerine yanıt süremiz 3 iş günüdür. Bu süre zarfında yaşadığınız sorunlara dair dönüşler yapılır ve çözümleri adına çalışmalar başlatılır.

                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Destek konusu Forum üzerinde Premium Support alanından gerçekleştirilir. Bu alanı yalnızca lisans sahibi müşterilerimiz kullanabilir.

                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    <Link href="https://ve3.plus/tr/rehber/" target="_blank"><span style={{ color: 'cyan' }}>VE3.Plus/tr/rehber</span></Link> adresi VE3.Plus'ın kullanımına dair içerikler bulundurur ve bu içerikler önceden haber verilmeksizin değiştirilebilir veya kaldırılabilir.

                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Forum(<Link href="https://forum.ve3.plus/" target="_blank"><span style={{ color: 'red' }}>forum.ve3.plus</span></Link>) platformumuz saygılı bir dil ve üslup ile kullanılmalıdır.
                    </li>
                                       
                  </ul>
                  
                     
                 
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
