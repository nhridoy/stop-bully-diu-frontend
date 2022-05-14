import React from "react";
import { useLocation } from "react-router-dom";

const Blog = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="py-4">
      <div className="relative w-full h-96">
        <img
          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          alt="..."
          className="w-full h-full object-cover brightness-50"
        />
        <div className="text-white absolute inset-0 h-full w-full flex justify-center items-center">
          <h2 className=" text-5xl italic font-semibold">Blog Title</h2>
        </div>
      </div>
      <p
        className="
    first-letter:text-5xl
    first-letter:font-bold
    first-letter:text-blue-700
    first-letter:font-serif
    text-justify
    my-4
    text-xl
  "
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
        repudiandae sint fugiat eveniet officia suscipit nisi minima nam dolore
        molestiae officiis excepturi expedita quisquam eum ea esse beatae
        recusandae hic nulla, laborum, ratione, aperiam laboriosam! Molestias
        labore praesentium cumque delectus voluptates, vitae a, porro nihil vero
        laboriosam nesciunt sint similique. Cum explicabo molestiae nostrum
        dolorem nemo voluptatum, necessitatibus quaerat reiciendis sequi
        incidunt porro at voluptatem qui velit minima enim aspernatur aperiam
        adipisci, obcaecati optio quibusdam! In harum nulla modi, nesciunt autem
        quam est ratione non magni atque at quo veniam tenetur esse laboriosam
        voluptas commodi omnis facere libero. Quo doloribus dolores delectus
        sapiente facere! Cumque, eos atque id error quaerat eaque, nesciunt
        saepe modi, ipsa unde labore eius non. Ea quaerat fugiat labore! Quis ut
        autem impedit vel eaque? Voluptatem odio eaque quidem tempore corrupti
        quis dicta tempora saepe, aperiam numquam rerum explicabo unde illum
        quod sequi provident consectetur impedit? Sapiente debitis eligendi
        magni ab quidem fuga fugiat explicabo. Cumque quas sed ducimus laborum,
        debitis iste? Nisi asperiores nam cum neque nulla. Neque distinctio
        quibusdam numquam inventore soluta, nam velit et dolores ab corrupti
        accusantium a, maxime unde officiis quis amet harum iusto mollitia, rem
        aut impedit maiores! Possimus doloribus optio atque veniam consequatur
        corrupti inventore eum odit itaque ex exercitationem quasi, officia
        impedit voluptatum saepe sequi totam sint quae cumque maxime, error sed
        ratione. Provident veritatis earum distinctio cumque minima consequuntur
        ipsum ea placeat, sequi nihil quidem dolorum voluptate aliquam! Expedita
        quas excepturi labore sit fuga debitis in vel provident ex. Totam sed
        adipisci vel, perspiciatis velit atque explicabo eligendi pariatur hic
        similique, aut ipsa omnis nostrum porro et quos laboriosam est inventore
        quidem distinctio nisi eius! Ex asperiores esse quidem dolores eaque
        dolore similique eveniet soluta debitis excepturi nemo magnam ipsa quasi
        tenetur iusto dignissimos mollitia numquam eligendi est obcaecati, quo
        iste quam, labore voluptatibus! Vero optio, natus et eius, velit aliquid
        doloremque perspiciatis atque eum in obcaecati repellendus fugit maiores
        id eligendi illo quae fuga. Fugit ullam, et nam unde fugiat tenetur
        aspernatur, laborum laudantium sunt consequuntur minima? Voluptate
        voluptatum rerum repudiandae earum praesentium blanditiis expedita sequi
        neque voluptates, reiciendis incidunt rem, non maiores quo veniam modi
        eos mollitia quisquam consequuntur, debitis impedit vel pariatur totam.
        Laborum vel quo eligendi explicabo quam animi, quis aperiam? Sapiente,
        suscipit eos. Rerum cum minus accusamus inventore odio, officiis velit
        dolorum ducimus laborum. Quis culpa saepe amet, dolor ducimus ipsa earum
        nobis aliquid perspiciatis ab at ipsam similique deserunt ipsum officiis
        est inventore sunt perferendis explicabo. Itaque animi similique ipsum
        quae in obcaecati suscipit sunt, dolor optio aliquam commodi neque
        molestias maiores ducimus magni voluptate sapiente placeat, vel expedita
        tempore. Quaerat assumenda corrupti quibusdam, iste repellat harum!
        Accusamus unde sint illo, quaerat odit iure suscipit debitis corrupti
        eos eaque voluptatibus laborum aliquid eligendi in deserunt nam soluta
        temporibus! Neque nesciunt illo aperiam ea tempora laboriosam assumenda,
        ullam sequi illum, perferendis odit ducimus quibusdam laudantium nulla
        sit non ut accusantium cum adipisci? Veniam sequi vitae minima fugit
        nihil ex aliquid, ipsam consequuntur?
      </p>
    </div>
  );
};

export default Blog;
