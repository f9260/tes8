import Link from 'next/link'

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | VE3.Plus",
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
                  Sıkça Sorulan Sorular
                </h2>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                  
                  
                  </div>
                 
                </div>
                <div>
                  
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-medium text-[#9ca3af] sm:text-lg lg:text-base xl:text-lg">
                    VE3.Plus'ın tüm özellikleri aktif mi?
                    </li>
                    VE3.Plus modlara, alt modlara ve ortak özelliklere sahiptir.

Alt modlar kendi içinde kararlı çalışır ancak ortak özelliklerle uyumlu çalışması için geliştirme süreci devam etmektedir(<Link href="https://forum.ve3.plus/p/1-test" target="_blank"><span style={{ color: 'red' }}>Listeyi görüntüle</span></Link>). Bu sebeple, şu an için alt modlardan yalnızca kendi içinde faydalanılması önerilir.

                    <li className="mb-2 text-base font-medium text-[#9ca3af] sm:text-lg lg:text-base xl:text-lg">
                    Alt mod nedir?
                    </li>

                      Single, Multi, Boost ve Hit Gun ana modları ifade eder. 

                      Hit Gun içinde Fabrika, Viral, Geniş, Render ve Altyazı adında alt modlar bulunur. 

                      Bu özelliklerin kendi içinde de farklı alt modlar yer alabilir. Örneğin Fabrika {'>'} Eşitle.
                    <li className="mb-2 text-base font-medium text-[#9ca3af] sm:text-lg lg:text-base xl:text-lg">
                    Hata ile karşılaşırsam ne yapmalıyım?
                    </li>

                    İlk olarak, <b>girdiğiniz verilerin doğruluğundan</b> emin olmalısınız. Örneğin <b>süre ayarları, kullanılan parametreler, 
                    hatalı virgül kullanımı vb.</b> kontrolleri tamamlamalısınız.

                    Girdiğiniz verilerde sorun yoksa,

                    Lisans sahibiyseniz <Link href="https://forum.ve3.plus/d/14-premium-ve-avantajlari" target="_blank"><span style={{ color: 'yellow' }}> <b>Premium Support</b></span></Link> bölümüne yazabilirsiniz. Mümkün olan en kısa sürede, 
                    detaylı kontrollerin sağlanacağı özel bir görüşme başlatılacaktır. Lisanslı kullanıcı değilseniz, 
                    hangi işlemleri gerçekleştirirken hata aldığınızı <Link href="https://forum.ve3.plus/" target="_blank"><span style={{ color: 'red' }}><b>Forum</b></span></Link>'da işlem yaptığınız mod ile alakalı konu içerisinden paylaşabilirsiniz. 
                    <li className="mb-2 text-base font-medium text-[#9ca3af] sm:text-lg lg:text-base xl:text-lg">
                    1 lisans kaç bilgisayarda kullanılır?
                    </li>
                    Aksi belirtilmedikçe 1 lisans 1 bilgisayarda kullanılabilir.
                    <li className="mb-2 text-base font-medium text-[#9ca3af] sm:text-lg lg:text-base xl:text-lg">
                    Tek bilgisayarda çok sayıda uygulama çalıştırabilir miyim?
                    </li>
                    Hayır. Aynı anda birden fazla .exe çalıştırılamaz.
                    <li className="mb-2 text-base font-medium text-[#9ca3af] sm:text-lg lg:text-base xl:text-lg">
                    Ürünün gerçek fiyatı nedir?
                    </li>
                    300 dolar + platform komisyonudur. 300 doların altındaki fiyatlar geçici bir süre içindir.
                                       
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
