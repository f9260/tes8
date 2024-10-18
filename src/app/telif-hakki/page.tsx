import Link from 'next/link';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Telif Hakkı | VE3.Plus",
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
                  Telif Hakkı
                </h2>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center"></div>
                </div>
                <div>
                  <p className="mb-4">
                    VE3.Plus başkalarının fikri mülkiyet haklarına saygı duyar ve sizden de bunu talep eder. VE3.Plus, yazılımında fikri mülkiyet haklarının ihlal edilmesine izin vermez ve bildirimde bulunulduğunda ticari içeriğin (halka açık bir web adresi / URL) yazılım tarafından kullanılmasını derhal askıya alır.
                  </p>
                  <p className="mb-4">
                    İçerik üreticisi/sahibi, telif hakkı sahibi veya bunların temsilcisiyseniz ve VE3.Plus yazılımının kamuya açık içeriklerinizi dönüştürmek için olası kullanımını devre dışı bırakmak istiyorsanız, lütfen aşağıdaki bilgileri içeren bir talebi info@ve3.plus adresine e-posta yoluyla gönderin:
                  </p>
                  <ul className="mb-4">
                    <li>- Engellememizi istediğiniz içerik(ler)in URL(ler)i ve açıklama(lar)ı.</li>
                    <li>- İçerik(ler) için işlem yapma haklarına sahip olduğunuzu gösteren elektronik veya fiziksel bir kanıt formu.</li>
                    <li>- Telefon numarası ve geçerli bir e-posta adresi gibi sizinle iletişim kurmama izin verecek makul ölçüde yeterli iletişim bilgileri.</li>
                  </ul>
                  <p className="mb-4">
                    Bildiriminizin ardından ilgili içerik(ler) 48 saat içerisinde sistemimizde kara listeye alınacaktır(Özel durumlarda süre uzayabilir).
                  </p>
                  <p className="mb-4">
                    <strong>Genel Duyuru:</strong>
                  </p>
                  <p className="mb-4">
                    VE3.Plus, çalışmaları ister YouTube'da ister başka bir hizmette barındırılsın, tüm içerik oluşturucuların fikri mülkiyet haklarına saygı duyar. Kullanıcılarımızı da bu haklara saygı göstermeye davet ediyoruz.
                  </p>
                  <p className="mb-4">
                    <strong>İçerik Sahipliği ve Telif Hakkı Uyumluluğu:</strong>
                  </p>
                  <p className="mb-4">
                    VE3.Plus aracılığıyla indirilen tüm videolar, müzik ve diğer içerikler ilgili telif hakkı sahiplerinin mülkiyetindedir. Bu hizmetin kullanıcıları, telif hakkıyla korunan içeriğin uygunsuz kullanımı veya dağıtımından kaynaklanabilecek telif hakkı ihlali sorunları için tek sorumluluğu üstlenmeyi kabul eder.
                  </p>
                  <p className="mb-4">
                    <strong>Sorumluluk:</strong>
                  </p>
                  <p className="mb-4">
                    Kullanıcılar, hizmet aracılığıyla herhangi bir içeriği indirmenin ve kullanmanın yasallığını sağlamaktan tek başına sorumludur.
                  </p>
                  <p className="mb-4">
                    <strong>Telif Hakkı İhlali ve İçerik Kaldırma:</strong>
                  </p>
                  <p className="mb-4">
                    İçeriklerinin VE3.Plus üzerinden haklarını ihlal edecek şekilde kullanıldığını ve farklı platformlara yüklendiğini düşünen telif hakkı sahiplerinin bizimle iletişime geçmeleri tavsiye edilir. Talep üzerine hizmetimizdeki içeriğin engellenmesini de içerebilecek her türlü endişeyi gidermek için telif hakkı sahipleriyle birlikte çalışmaya kararlıyız.
                  </p>
                  <p className="mb-4">
                    <strong>İletişim Bilgileri:</strong>
                  </p>
                  <p className="mb-4">
                    Telif hakkı konuları veya URL engelleme talepleri için info@ve3.plus adresinden bizimle iletişimime geçebilirsiniz.
                  </p>
                  <p className="mb-4">
                    <strong>Son Hatırlatma:</strong>
                  </p>
                  <p>
                    Telif hakkıyla korunan içeriği indirmenin ve kullanmanın yasal sonuçlarını anlamak önemlidir. Kullanıcılarımızı dikkatli olmaya ve indirilen herhangi bir materyali kullanırken gerekli tüm haklara veya izinlere sahip olduklarından emin olmaya çağırıyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> {/* Eksik div kapanışı buraya eklendi */}
      </section> {/* Eksik section kapanışı buraya eklendi */}
    </>
  );
};

export default BlogDetailsPage;
