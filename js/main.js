function Bakeries(name, link, description, location, image) {
  this.name = name
  this.link = link
  this.description = description
  this.location = location
  this.image = image
}

Bakeries.prototype.render = function() {
  var myDiv = document.createElement('div')
  var title = document.createElement('h4')
  var link = document.createElement('a')
  var desc = document.createElement('p')
  var loca = document.createElement('p')
  var image = document .createElement('img')

  title.textContent = this.name
  link.href = this.link
  link.textContent = this.name
  image.src = this.image
  desc.textContent = this.description
  loca.textContent = this.location

  $(title).css({'border-bottom':'1px solid #c73c25', 'margin-bottom':'0.8rem', 'color':'#ce6c31', 'font-size':'bold'})
  $(link).addClass('btn btn-outline-danger').attr('target', '_blank')
  $(image).css({'width':'100%', 'margin-bottom': '1.5rem'})
  $(myDiv).addClass('col-4 my-4').append(title,image,desc,loca,link)

    //retrun to myDiv so no need to append
    return myDiv
}

function BakeriesCollection() {
  this.bakeries = []
}

BakeriesCollection.prototype.add = function(bakery) {
  this.bakeries.push(bakery)
}

BakeriesCollection.prototype.render = function() {
  //otherDiv wraps myDiv
  var otherDiv = document.createElement('div')
  this.bakeries.forEach(function(bakery) {
    otherDiv.className = 'row'
    otherDiv.appendChild(bakery.render())
  })
  
  return otherDiv
}


var bakeriesCollection = new BakeriesCollection()

var bPat = new Bakeries('B.Patisserie', 'https://bpatisserie.com/','Parisian & Viennese-style pastries, sandwiches & coffee served in modern space with an open kitchen.', '2821 California St, San Francisco, CA 94115','img/b.jpg')
var mrHolmes = new Bakeries('Mr.Holmes Bakehouse', 'http://mrholmesbakehouse.com/', 'Bakery serving a mix of tarts, donuts & croissant-muffins, plus coffee in a cozy, bright space.', '1042 Larkin St, San Francisco, CA 94109', 'img/mr.jpg')
var neighbor = new Bakeries('Neighbor Bakehouse', 'https://www.neighborsf.com/', 'Cafe & bakery serving baked goods & light fare in an industrial space with an open concept.', '2343 3rd St #100, San Francisco, CA 94107', 'img/neighbor.jpg')
var crafsman = new Bakeries('Craftsman and Wolves', 'http://www.craftsman-wolves.com/', 'Pastry-whiz William Werner serves egg-filled muffins, bonbons, coffee & more.', '746 Valencia St, San Francisco, CA 94110', 'img/crafts.jpg')
var jane = new Bakeries('Jane', 'https://www.itsjane.com/', 'Upscale, light-filled cafe brewing fair-trade coffee & whipping up housemade baked goods.', '2123 Fillmore St, San Francisco, CA 94115', 'img/jane.jpg')
var les = new Bakeries('Les Gourmands Bakery', 'http://lesgourmandsbakery.com/', 'A family-run French bakery with croissants, brioche and other classics served in modern quarters.', '280 5th St, San Francisco, CA 94103', 'img/les.jpg')
var ariz = new Bakeries('Arizmendi Bakery', 'https://www.arizmendibakery.com/', 'A worker-owned co-op & no-frills setting for freshly made breads, sweets & thin-crust pizzas.', '1331 9th Ave, San Francisco, CA 94122', 'img/ariz.jpg')
var la = new Bakeries('La Boulangerie', 'http://www.laboulangeriesf.com/', 'French-American bakery & cafe with coffee, pastries, brunch & lunch items in cozy, rustic-chic digs.','2325 Pine St, San Francisco, CA 94115','img/la.jpg')
var vive = new Bakeries('Vive La Tarte', 'http://www.vivelatarte.com/', 'Lofty, industrial-chic Belgian bakery with an open kitchen for tarts, plus coffee, tea & juice.', '1160 Howard St, San Francisco, CA 94103', 'img/vive.jpeg')

bakeriesCollection.add(bPat)
bakeriesCollection.add(mrHolmes)
bakeriesCollection.add(neighbor)
bakeriesCollection.add(crafsman)
bakeriesCollection.add(jane)
bakeriesCollection.add(les)
bakeriesCollection.add(ariz)
bakeriesCollection.add(la)
bakeriesCollection.add(vive)

document.getElementsByClassName('display')[0].appendChild(bakeriesCollection.render())
