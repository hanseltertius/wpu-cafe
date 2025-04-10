import useScreenStore from '../../../stores/ScreenStore';
import styles from './OrderDetail.module.css';

const OrderDetail = () => {
  const { isDesktop } = useScreenStore();

  /**
   * TODO :
   * - di dalam nya itu ada order-detail-information =>
   * a. information-container (incl. last-update (ini di jadiin satu sama information container))
   *
   * kalau mau, coba pake dummy data nya bgmn, gw pake in json object, trus di jadiin pake api dengan routing
   */

  return (
    <main className="layout">
      <header className="layout-header">
        <h1>Order Detail</h1>
        <div>Test</div>
      </header>
      <section className="layout-content">
        {isDesktop && (
          <section className={styles['order-detail-information-container']}>
            <section className="scroll-wrapper">
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum harum nam adipisci! Aspernatur iste earum, quia
                similique quaerat sit veritatis cupiditate dolorum nam! Illum ab
                rem tenetur doloribus officiis. Quae doloremque expedita quasi
                tenetur eaque voluptatum, laborum architecto aperiam earum nam,
                sed suscipit quaerat ratione temporibus iusto. Optio iste
                quaerat recusandae quisquam harum. Modi animi accusantium
                tempora mollitia, non, veritatis aliquam, velit quis
                consequuntur laudantium ullam repellat! Adipisci tempore
                praesentium fuga iste? Doloremque velit itaque atque fugiat nisi
                optio non dolorem eveniet sequi voluptate ab fugit in, magni
                impedit quas eum quasi at dolor quo reprehenderit saepe
                reiciendis magnam? Numquam molestiae aperiam distinctio unde
                quibusdam quam minima tenetur vitae dicta quo voluptatem
                cupiditate repellat, accusamus amet error. Accusamus asperiores
                obcaecati dolore eaque atque illum quibusdam voluptas quidem
                dolor qui porro error animi iure dicta magnam, quaerat excepturi
                facere neque, ipsam temporibus. Quis alias quia fugit numquam ut
                sit explicabo placeat nulla fugiat aliquam, quaerat eius eveniet
                sequi! Alias optio beatae a repudiandae unde, dolorum dolore
                harum esse blanditiis modi rerum, aperiam numquam corporis
                natus, minus dolorem. Modi corporis dolores voluptates aliquam
                esse repellat delectus consequatur, vitae voluptatem aliquid
                pariatur unde deserunt. Vero obcaecati quisquam nobis officia a
                alias totam dolorem necessitatibus dolores nihil quidem,
                accusamus culpa veniam repellendus harum cumque quia!
                Perferendis eaque similique quo non nulla culpa, sint error!
                Commodi eos architecto quia maxime sequi voluptatem error
                asperiores? Quasi esse sint a, mollitia quis at. Molestias
                saepe, quia iusto eius harum, mollitia nihil ex natus dicta
                nostrum impedit vel beatae dolor tenetur deserunt, excepturi
                accusamus vitae sit. Consequatur necessitatibus dolorem
                voluptatem iure? Quae ipsam consequatur deleniti animi sed quo
                maiores accusamus nemo eligendi! Vero obcaecati, sequi aperiam
                quidem cupiditate vel suscipit voluptatum minus? Fuga excepturi
                necessitatibus ipsam mollitia illo, accusantium cum delectus
                repudiandae? Quibusdam molestias deserunt tempore eaque maiores!
              </div>
            </section>
          </section>
        )}
        <section className={styles['order-detail-menus-container']}>
          <section className="scroll-wrapper">
            <section className={styles['order-detail-menus']}>
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Similique, itaque recusandae nostrum labore deserunt, ab debitis
                deleniti ipsum consequuntur eos, ea voluptas provident est
                pariatur nihil? Rerum distinctio dolor tempore. Dolor debitis
                reiciendis laboriosam, provident laudantium iusto vel ex
                repudiandae deserunt harum beatae numquam facilis possimus rerum
                quae eaque incidunt, omnis in? Nostrum similique a quibusdam!
                Impedit repellat dolorem numquam eligendi eius quisquam
                voluptates error, at veritatis deserunt obcaecati magnam
                doloribus architecto aut placeat molestias nisi nihil maiores!
                Tempore ullam ipsa totam voluptatibus nihil eligendi inventore
                eius deserunt earum ut consequatur deleniti architecto similique
                numquam, nisi nostrum, autem error! Facilis aspernatur cumque
                blanditiis laboriosam temporibus eos, nemo totam, voluptatum
                porro fuga nihil excepturi fugit placeat, aliquam non?
                Repudiandae aperiam quibusdam iusto, cumque doloribus illum
                exercitationem explicabo maiores voluptate obcaecati minus,
                voluptatibus alias, rem iure ea quo maxime sint beatae pariatur.
                Magnam mollitia repellendus nulla illum aliquid tenetur nemo.
                Accusantium earum architecto, quia, minima ex amet asperiores
                voluptate dicta voluptatum ipsum ad neque aliquam iure totam sed
                quis? Quaerat, optio non assumenda esse accusantium doloremque
                repellat error neque voluptate modi ratione odio quasi commodi
                eligendi ea, accusamus vitae sint quas autem aspernatur totam.
                Sunt iusto a nisi harum hic, atque voluptates perspiciatis ipsum
                mollitia ad nobis maxime expedita, quo necessitatibus!
                Provident, sapiente. Ex maiores a impedit saepe aliquid
                voluptatem vero, voluptatibus assumenda placeat reprehenderit at
                voluptates repellendus, rem tempora consequuntur, natus
                quibusdam quasi molestias ipsa! Nesciunt perspiciatis sed culpa
                earum quos deleniti repellat, aut asperiores libero aliquam sunt
                suscipit, veniam nihil? Ipsa itaque ullam, laudantium alias non
                sequi labore, odit quia et animi eius velit sunt perspiciatis
                deleniti unde at magni accusamus vel dolorem quis aliquid!
                Voluptatum et totam delectus, illum facere sequi, ipsa
                architecto labore corporis excepturi numquam exercitationem
                tempora animi libero praesentium qui minima est! Pariatur
                repellendus quo nulla accusantium nihil necessitatibus error
                illum deleniti, sint, harum culpa nam molestias! Blanditiis
                delectus praesentium similique placeat rem veritatis repellat
                accusantium perspiciatis, dolores quaerat suscipit eum, unde
                culpa eius possimus? Porro, voluptatum alias? Voluptates
                tempore, alias fuga recusandae quos neque optio ex minima
                praesentium quae rerum at velit earum amet quaerat facilis
                eligendi dolore! Aliquam obcaecati, nemo sed inventore quam
                consequuntur nam nobis minus unde voluptatibus dolor libero nisi
                quia iusto? Saepe inventore labore suscipit. Aliquid, eligendi
                illo minus adipisci repudiandae aut rem! Quisquam, dolorum iusto
                aut quod porro debitis facere quae nemo, quos impedit culpa vel.
                Accusamus provident libero sequi natus facere nostrum
                repudiandae nulla ab, numquam voluptas dicta voluptatem unde aut
                eius ipsum ratione aperiam deleniti perferendis earum possimus
                ad quia? Accusantium obcaecati hic modi odit impedit tenetur
                soluta enim perspiciatis recusandae doloribus cum ut optio
                quibusdam beatae mollitia repellendus dignissimos, repudiandae
                laudantium reprehenderit ipsum delectus reiciendis dolores
                suscipit! Nesciunt, numquam doloremque distinctio quaerat ipsam
                pariatur blanditiis laboriosam? Doloribus nihil reprehenderit
                fugit asperiores. Accusantium soluta voluptatem ea praesentium
                consectetur odit, natus, dolorum tenetur accusamus, debitis
                placeat. Dignissimos in perspiciatis, doloremque veniam
                repellendus ex nemo error modi! Minima magnam ipsum, porro
                officiis, quidem quae nihil ex alias omnis sed, amet tempora.
                Sunt, suscipit accusamus. Rem, illum voluptates? Culpa sint
                fugit ex ea ratione facilis distinctio quisquam excepturi
                voluptates sequi animi quis voluptas, ipsam temporibus expedita?
                Repellendus saepe aspernatur commodi eos sequi porro placeat ex,
                magnam incidunt. Debitis beatae porro eaque exercitationem
                error, enim possimus dolorum laboriosam corporis illo sequi
                adipisci, odit vel, perferendis nemo nostrum quos soluta et eius
                expedita earum ducimus ipsam quae. In aut pariatur voluptatum
                reiciendis quaerat voluptatibus nulla ea soluta, earum quasi
                accusantium, ratione corporis placeat repellat quam laudantium
                at laboriosam tempora a saepe atque facere distinctio eos rerum!
                Facilis numquam reprehenderit suscipit iusto error officiis
                commodi eligendi exercitationem sint cum animi id nostrum maxime
                voluptates sed non, repellat officia autem cupiditate eos. Illum
                fugit eveniet deserunt cum iusto aperiam iure, dolorem amet? Id
                quos iste culpa, alias quis ea? Deserunt perferendis beatae
                quasi odit omnis quo tempore doloribus magnam et distinctio
                incidunt, soluta iusto veniam hic quaerat magni adipisci porro?
                Earum qui aliquid, commodi, sequi sapiente harum consectetur vel
                voluptatem mollitia perspiciatis totam fuga? Quidem, id! Culpa
                aut ab nemo nihil aliquam suscipit dicta libero earum
                voluptatibus, nam corporis tenetur eos qui illum, facere,
                nostrum aspernatur natus! Quibusdam nobis blanditiis non,
                veritatis architecto labore enim quam voluptas ab sapiente quod
                impedit! Expedita nemo nostrum nesciunt natus deserunt, aut
                pariatur blanditiis sint iure, ex quia nulla eos excepturi
                inventore nam molestias sunt, quae consequatur dolorum
                laudantium quibusdam alias. Iure eos nihil ipsa iusto. Quos
                blanditiis animi ea necessitatibus officiis, maxime culpa eum
                facere, obcaecati dolorem ullam. Placeat perferendis non cumque
                omnis, nostrum ut eaque mollitia nam voluptatem eligendi
                voluptates aperiam repellendus itaque unde ex veniam error et
                ducimus molestias inventore quaerat voluptas, consequuntur
                deleniti fugiat. Soluta sapiente perspiciatis, quod ex culpa
                quidem possimus? Accusantium quisquam veritatis, labore mollitia
                reiciendis aut quos laborum voluptates voluptas soluta maxime
                debitis dolor officia natus vel illum inventore ab, consequatur
                ipsam eaque tenetur? Quibusdam consequuntur maiores id. Corporis
                enim voluptatum voluptatibus ratione tempora accusamus maiores
                reiciendis accusantium! Accusamus quia, tenetur nulla animi
                perspiciatis vel unde odit fugiat expedita qui voluptatum
                aliquid consequatur, adipisci quasi est? Repudiandae similique
                corporis autem nulla doloremque cupiditate, reprehenderit
                temporibus quis dolorem nisi vel quae? Fuga fugiat hic dolores
                officiis mollitia est cum eius necessitatibus recusandae
                repellendus rerum, nam quas! Sequi, quisquam natus odio quam
                dignissimos aliquam voluptatum delectus minus vel quae expedita
                animi cum itaque? Soluta laboriosam fugit quidem harum magni
                excepturi maiores adipisci molestias perferendis quaerat dolore
                ab et, non id sapiente praesentium velit dolorem accusantium
                corporis dolores perspiciatis nemo illo incidunt? Aliquid
                laborum aut sit fugit, odio velit, aperiam labore dicta deleniti
                repellat, iste quae harum? Reprehenderit, et consectetur.
                Quibusdam ab esse molestiae, natus soluta suscipit eius quod non
                blanditiis a, officia ipsa! Pariatur, vero, vel reiciendis iste
                labore ducimus consectetur hic placeat, repellat inventore
                nesciunt sint error. Esse quas optio, itaque eius non, placeat
                laborum explicabo aliquam atque reprehenderit quis voluptatem
                quos dignissimos commodi. Sit pariatur quia, voluptatum
                repudiandae provident praesentium nisi ab porro minima ad
                nesciunt veniam eaque corporis neque, error a.
              </div>
            </section>
          </section>
        </section>
        {!isDesktop && (
          <div className="bottom-button-container">
            <div>Test</div>
          </div>
        )}
      </section>
    </main>
  );
};

export default OrderDetail;
