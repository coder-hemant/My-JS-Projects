const text = [
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis officiis, quaerat veniam magnam blanditiis voluptatibus excepturi natus repellendus repudiandae maxime vero, obcaecati deserunt praesentium libero saepe, sequi dolores iusto reiciendis perspiciatis necessitatibus ea quod quae! Incidunt quae aspernatur explicabo ratione!",


  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut exercitationem temporibus voluptatem, dolor pariatur odit molestias! Illo cumque, tenetur ullam natus minus in aspernatur optio harum ea quo consectetur aut asperiores pariatur sit eveniet veniam, libero, vero nobis magni? Dignissimos.",

  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam quibusdam, quos optio odit ut saepe accusamus perspiciatis harum quae eos vitae beatae. Pariatur voluptatibus tempore vero quidem cum ex, cumque error quod similique a eius aliquid unde, delectus eos ab.",

  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus rem, cum itaque culpa ut quas deleniti assumenda soluta dolor aspernatur nam quisquam explicabo totam beatae nisi illo animi! Voluptas harum blanditiis qui nobis error non velit, maiores incidunt fugiat consequatur.",

  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel maiores doloribus a qui veniam dolorem modi magnam molestiae, cupiditate, accusamus veritatis quisquam, saepe obcaecati provident tempora. Eius deleniti numquam minima facere tempora sint rem reiciendis saepe harum. Repudiandae, quidem dicta.",

  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum temporibus repellat doloremque, itaque esse explicabo repellendus rem, recusandae nam similique cupiditate nemo quas totam eius illum nulla sequi labore tenetur sit. Voluptatum mollitia suscipit neque voluptates culpa tempore quas perferendis?",

  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis rem natus at vero libero debitis mollitia nostrum vitae aliquid autem! Obcaecati nulla, natus atque id quia mollitia soluta, ad officia fugit veritatis, qui aut numquam dolorem eius quasi sint omnis!",

  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla iste modi voluptate harum, at vel quidem veritatis ipsum itaque obcaecati ullam eius vero eos ad a sint minima odio. Illum explicabo voluptatem quisquam quo veritatis officia id error ratione saepe!",

  "Lorem ipsum dolor sit amet consectetur adipisicing elit. A sunt laboriosam necessitatibus voluptate, deleniti libero cupiditate placeat eveniet dolorum architecto maiores. Saepe, quaerat molestiae doloremque odit voluptate praesentium assumenda quam dicta aperiam perferendis soluta, laboriosam sapiente quos nesciunt commodi illo.",

  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio aut a sunt eos nam quasi eligendi et temporibus in excepturi voluptate unde saepe, rem deleniti exercitationem facere dolorum dolores. Libero sed sint modi nihil omnis accusantium, rerum neque a numquam!",
]

const shuffle = (array) => {
  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}


const item = document.getElementById("item");
const dataContainer = document.getElementById("data");

console.log(text.length);

const generate = () => {
  const numbers = item.value;
  console.log(numbers);
  if(numbers > 10 || numbers < 0 || numbers == NaN) {
    dataContainer.innerHTML = `<p>Kera kha muji</p>`
  }else {
    const localText = shuffle(text);
    const p = localText.slice(0, numbers);
    const paras = p.map(
      (e) => {
        return `<p>${e}</p><br>`
      }
    )
    data.innerHTML = `${paras.join("")}`
  }
}