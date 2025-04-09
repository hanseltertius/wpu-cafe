import useScreenStore from '../../../stores/ScreenStore';
import styles from './MenuList.module.css';

const MenuList = () => {
  /**
   * TODO :
   * layout :
   * main class : layout
   * a. header :
   *    i. title
   *    ii. Go back
   * b. Menu List => .menu
   *    i. layout untuk filter => .filter
   *      1. search
   *      2. select box filter by category => All, Coffee, Non-Coffee, Pastries, Desserts, Sandwiches
   *    ii. layout untuk view menu list => .list
   * c. Customer Info => .customer-info
   *    i. pake customer info custom component
   */

  // TODO : create the modal component
  const { isDesktop } = useScreenStore();

  return (
    <main className="layout">
      <header className="layout-header">
        <h1>Testing</h1>
        <div>Test</div>
      </header>
      <section className={styles['layout-content']}>
        <section className={styles['menu-container']}>
          <section className={styles.filter}>
            <div>Testing</div>
            <div>Test</div>
          </section>
          <section className="scroll-wrapper">
            <section className={styles.list}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quis
              dolor optio alias maxime beatae quia pariatur, aspernatur
              reprehenderit vitae debitis dignissimos soluta sint, vel
              perferendis quos sit tenetur accusantium, quae perspiciatis.
              Consequatur aspernatur beatae sunt illo laudantium inventore
              velit, rem voluptates eligendi exercitationem libero a, placeat
              odio nesciunt debitis animi pariatur, ex esse? Tempore commodi
              distinctio, minus provident cumque cum quod id culpa ut, nam esse
              nesciunt maiores maxime eaque! Dolore sunt harum optio veritatis
              neque ratione tempora atque voluptate saepe porro molestias,
              dignissimos debitis excepturi eos! Est suscipit commodi itaque ab
              perspiciatis tempora blanditiis sit illo neque? Laboriosam
              cupiditate iusto dolorem aliquam vero repellendus. Fugit, rerum
              iusto veniam officiis consequatur explicabo aperiam obcaecati
              praesentium reprehenderit eligendi excepturi, aliquid quas quia
              corrupti molestiae sequi in, nesciunt delectus quam nobis illum ab
              blanditiis. Quaerat quasi facere qui dolorum nisi debitis
              veritatis illo cumque possimus non, dignissimos, suscipit, impedit
              vel ut repudiandae totam excepturi mollitia? Iure excepturi fuga
              totam, quam minima sapiente rerum mollitia magni consequatur
              soluta. Maxime cupiditate quibusdam nesciunt suscipit explicabo
              numquam, ipsam corporis, commodi tempore aut nisi libero
              laudantium officia molestiae necessitatibus repellat incidunt
              perspiciatis dignissimos doloremque harum possimus tenetur, minima
              excepturi? Sapiente quod, aliquid ad explicabo unde accusantium a
              non iure commodi consequatur laboriosam. Omnis, eius.
              Voluptatibus, quaerat atque nemo amet molestiae autem fugiat quos
              excepturi in incidunt natus, vitae corporis, iusto sint. Facilis
              beatae quos magni, sapiente laudantium quam architecto vitae natus
              nemo. Modi a minima ut! Qui asperiores voluptas voluptate
              laudantium, nisi nemo cum! Dolores commodi quidem debitis autem
              assumenda quae illum tempore nemo? Consequuntur, labore nostrum
              ipsam rem quo ipsum magni fugiat eum eius eos sint earum unde,
              eveniet nobis. Explicabo qui sint a error cum in eveniet,
              assumenda at? Facere cumque quis ullam veritatis praesentium
              reiciendis excepturi consequuntur deleniti ipsum deserunt? Ipsa,
              est a. Quam tempore repellendus sunt animi voluptates non quasi
              quos dolores temporibus expedita! Fugit maiores quasi repudiandae
              in quis blanditiis dolores dolorem debitis libero iure totam
              labore consequuntur obcaecati quaerat rem, eius voluptatum quas a
              aperiam alias impedit reprehenderit excepturi quidem? Doloremque
              placeat corporis vitae quisquam officiis illo ab ex inventore
              nihil odio. Odio nemo quod facilis molestiae qui ratione commodi.
              Possimus explicabo cum quasi obcaecati, blanditiis odit
              repellendus distinctio ipsum ipsa cupiditate aspernatur voluptatem
              magni ad, delectus debitis dicta recusandae maxime at officia
              fugit repellat consequatur. Omnis at iste animi quas corrupti,
              aspernatur error assumenda quod, fugiat perspiciatis repellat
              provident ea ex, dolorum soluta. Provident voluptatum eligendi
              dignissimos? Labore dolorum ullam, ratione, in aut saepe pariatur,
              cupiditate esse quas illum dolores aliquid neque? Dicta, ea?
              Numquam nam aperiam quia error dolorem repudiandae optio veritatis
              libero possimus officiis culpa illum nemo, ipsum, iusto quidem,
              cupiditate ipsam! Commodi sapiente praesentium fugit aut, ex
              consequuntur doloribus iste eveniet vero perspiciatis reiciendis
              fugiat asperiores, ipsa rem fuga. A deserunt eligendi commodi
              corporis dolore sint error nam! Obcaecati voluptas quasi mollitia,
              neque dolore laudantium reiciendis eos quisquam quia odio sequi
              vel! Ullam qui rerum ut consequuntur facere amet dolore vero fugit
              laudantium ipsam, reiciendis non, impedit harum repellendus earum
              quidem eos incidunt. Labore, veritatis! Atque porro commodi iure
              nobis eaque, nulla architecto vitae magnam harum tempore debitis
              quaerat qui modi esse, labore corporis totam incidunt reiciendis
              deserunt deleniti magni nam earum consequatur? Doloribus, iste
              animi dolorem enim quis eveniet architecto asperiores fugit earum
              voluptas ipsa repudiandae perspiciatis inventore quo nostrum
              dolores iure sit saepe ducimus porro debitis dignissimos?
              Obcaecati et repudiandae numquam quam? Qui atque iusto sed, nemo
              soluta omnis totam, eaque aliquam voluptates voluptatibus quaerat
              saepe vel corrupti recusandae esse. Cumque quos obcaecati
              voluptatum quam inventore dicta id adipisci dolores in ex, tempore
              facere, blanditiis consequuntur dolor culpa enim, magnam similique
              beatae! Quisquam tenetur distinctio ullam a, iste atque pariatur
              eius sequi iure sint libero ea adipisci molestias id debitis fugit
              vitae. Eaque a est iste. Fugit quos numquam corporis dolorum in,
              maiores delectus quo blanditiis ad ipsam accusantium omnis
              possimus fuga, distinctio doloribus repudiandae quisquam vel amet.
              Beatae consequatur est doloremque, repellendus dolor et,
              distinctio placeat aspernatur natus ipsa culpa quae dolorem eius
              praesentium porro in saepe vero. Obcaecati commodi magnam tempora
              maiores ab perferendis voluptate, a tempore neque. Deserunt
              asperiores et nam necessitatibus tempore molestiae delectus quam
              reprehenderit amet magni, neque ea doloremque sed eum quas non
              beatae ex veniam velit quibusdam dignissimos odit dolor nihil
              fuga. Quis similique distinctio dolor eveniet labore itaque,
              numquam voluptates velit mollitia obcaecati harum quod
              voluptatibus maxime omnis quasi animi asperiores cum incidunt
              reprehenderit fugiat maiores libero. Beatae officia unde neque
              quos maxime commodi itaque doloremque animi? Aspernatur
              perferendis delectus asperiores a praesentium ut, quae veritatis
              inventore assumenda temporibus amet culpa recusandae voluptas
              cumque? Exercitationem atque ut quae hic! Non similique dolorum
              minus? Nulla vel error libero minus assumenda praesentium
              obcaecati consectetur officia eveniet, fugiat a consequuntur. Odit
              quidem, officia consequuntur illo dicta molestias tenetur laborum.
              Excepturi, mollitia impedit? Similique officiis cupiditate porro
              illo aliquid exercitationem, provident unde deleniti odio
              perferendis blanditiis in numquam doloremque. At quo accusantium
              nesciunt placeat deserunt. Ipsa, dolore ab consequuntur placeat
              nesciunt ex praesentium assumenda eaque nulla nemo deserunt
              laborum quae dicta dolorum vitae. Nostrum officiis cumque eaque
              repudiandae facere dolore, voluptatem ratione natus! Et in
              reprehenderit distinctio nihil nam reiciendis, dolor eligendi
              minima impedit consequuntur incidunt excepturi ex corporis
              obcaecati eos a similique placeat quisquam optio nostrum
              consequatur quae voluptatem nulla consectetur! Eaque obcaecati
              suscipit molestias aspernatur perferendis odio delectus optio,
              vitae quod soluta cumque libero, sequi in distinctio excepturi,
              provident amet consectetur illo itaque similique perspiciatis
              debitis dolor consequuntur! Repudiandae tempora fugiat nesciunt
              fugit doloremque est ratione a ipsa nisi incidunt temporibus
              reprehenderit aliquid quae magni nam pariatur libero quisquam
              animi, voluptatibus ducimus quidem sit. Temporibus deserunt
              pariatur ducimus debitis enim nisi possimus laudantium
              reprehenderit! Corrupti illo aliquam porro in voluptatum
              perspiciatis error, quos, enim hic vel veritatis minus eos
              architecto aut iure? Nesciunt esse eaque tenetur consequuntur
              laborum iusto dolor tempora fuga labore provident ipsam quis
              aliquid doloribus neque accusantium, eius quaerat sit velit illum
              alias dolores porro sint at quae! Dignissimos modi distinctio
              molestias enim consequatur.
            </section>
          </section>
        </section>
        {isDesktop && (
          <aside className={styles['customer-info']}>
            <div>
              <div>Test</div>
            </div>
          </aside>
        )}
      </section>
      {!isDesktop && (
        <div className="bottom-button-container">
          <div>Test</div>
        </div>
      )}
    </main>
  );
};

export default MenuList;
