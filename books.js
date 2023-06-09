var __rawBooks = "Lucky Jim by Kingsley Amis, Money by Martin Amis, The Information by Martin Amis, The Bottle Factory Outing by Beryl Bainbridge, According to Queeney by Beryl Bainbridge, Flaubert's Parrot by Julian Barnes, A History of the World in 10 1/2 Chapters by Julian Barnes, Augustus Carp Esq. by Himself: Being the Autobiography of a Really Good Man by Henry Howarth Bashford, Molloy by Samuel Beckett, Zuleika Dobson by Max Beerbohm, The Adventures of Augie March by Saul Bellow, The Uncommon Reader by Alan Bennett, Queen Lucia by EF Benson, The Ascent of Rum Doodle by WE Bowman, A Good Man in Africa by William Boyd, The History Man by Malcolm Bradbury, No Bed for Bacon by Caryl Brahms and SJ Simon, Illywhacker by Peter Carey, A Season in Sinji by JL Carr, The Harpole Report by JL Carr, The Hearing Trumpet by Leonora Carrington, Mister Johnson by Joyce Cary, The Horse's Mouth by Joyce Cary, Don Quixote by Miguel de Cervantes, The Case of the Gilded Fly by Edmund Crispin, Just William by Richmal Crompton, The Provincial Lady by EM Delafield, Slouching Towards Kalamazoo by Peter De Vries, The Pickwick Papers by Charles Dickens, Martin Chuzzlewit by Charles Dickens, Jacques the Fatalist and his Master by Denis Diderot, A Fairy Tale of New York by JP Donleavy, The Commitments by Roddy Doyle, Ennui by Maria Edgeworth, Cheese by Willem Elsschot, Bridget Jones's Diary by Helen Fielding, Joseph Andrews by Henry Fielding, Tom Jones by Henry Fielding, Caprice by Ronald Firbank, Bouvard et Pécuchet by Gustave Flaubert, Towards the End of the Morning by Michael Frayn, The Polygots by William Gerhardie, Cold Comfort Farm by Stella Gibbons, Dead Souls by Nikolai Gogol, Oblomov by Ivan Goncharov, The Wind in the Willows by Kenneth Grahame, Brewster's Millions by Richard Greaves (George Barr McCutcheon), Squire Haggard's Journal by Michael Green, Our Man in Havana by Graham Greene, Travels with My Aunt by Graham Greene, Diary of a Nobody by George Grossmith, The Little World of Don Camillo by Giovanni Guareschi, The Curious Incident of the Dog in the Night-time by Mark Haddon, Catch-22 by Joseph Heller, Mr Blandings Builds His Dream House by Eric Hodgkins, High Fidelity by Nick Hornby, I Served the King of England by Bohumil Hrabal, The Lecturer's Tale by James Hynes, Mr Norris Changes Trains by Christopher Isherwood, The Mighty Walzer Howard by Jacobson, Pictures from an Institution by Randall Jarrell, Three Men in a Boat by Jerome K Jerome, Finnegans Wake by James Joyce, The Castle by Franz Kafka, Lake Wobegon Days by Garrison Keillor, Death and the Penguin by Andrey Kurkov, The Debt to Pleasure by John Lanchester, L'Histoire de Gil Blas de Santillane (Gil Blas) by Alain-René Lesage, Changing Places by David Lodge, Nice Work by David Lodge, The Towers of Trebizond by Rose Macaulay, England Their England by AG Macdonell, Whisky Galore by Compton Mackenzie, Memoirs of a Gnostic Dwarf by David Madsen, Cakes and Ale - Or the Skeleton in the Cupboard by W Somerset Maugham, Tales of the City by Armistead Maupin, Bright Lights Big City by Jay McInerney, Puckoon by Spike Milligan, The Restraint of Beasts by Magnus Mills, Charade by John Mortimer, Titmuss Regained by John Mortimer, Under the Net by Iris Murdoch, Pnin by Vladimir Nabokov, Pale Fire by Vladimir Nabokov, Fireflies by Shiva Naipaul, The Sacred Book of the Werewolf by Victor Pelevin, La Disparition by Georges Perec, Les Revenentes by Georges Perec, La Vie Mode d'Emploi by Georges Perec, My Search for Warren Harding by Robert Plunkett, A Dance to the Music of Time by Anthony Powell, A Time to be Born by Dawn Powell, Excellent Women by Barbara Pym, Less Than Angels by Barbara Pym, Zazie in the Metro by Raymond Queneau, Solomon Gursky Was Here by Mordecai Richler, Alms for Oblivion by Simon Raven, Portnoy's Complaint by Philip Roth, The Westminster Alice by Saki, The Unbearable Bassington by Saki , Hurrah for St Trinian's by Ronald Searle, Great Apes by Will Self, Porterhouse Blue by Tom Sharpe, Blott on the Landscape by Tom Sharpe, Office Politics by Wilfrid Sheed, Belles Lettres Papers: A Novel by Charles Simmons, Moo by Jane Smiley, Topper Takes a Trip by Thorne Smith, The Adventures of Ferdinand Count Fathom by Tobias Smollett, The Adventures of Roderick Random by Tobias Smollett, The Adventures of Peregrine Pickle by Tobias Smollett, The Expedition of Humphry Clinker by Tobias Smollett, The Prime of Miss Jean Brodie by Muriel Spark, The Girls of Slender Means by Muriel Spark, The Driver's Seat by Muriel Spark, Loitering with Intent by Muriel Spark, A Far Cry from Kensington by Muriel Spark, The Life and Opinions by Tristram Shandy, Gentleman by Laurence Sterne, White Man Falling by Mike Stocks, Handley Cross by RS Surtees, A Tale of a Tub by Jonathan Swift, Penrod by Booth Tarkington, The Luck of Barry Lyndon by William Makepeace Thackeray, Before Lunch by Angela Thirkell, Tropic of Ruislip by Leslie Thomas, A Confederacy of Dunces by John Kennedy Toole, Barchester Towers by Anthony Trollope, Venus on the Half-Shell by Kilgore Trout, The Mysterious Stranger by Mark Twain, The Witches of Eastwick by John Updike, Breakfast of Champions by Kurt Vonnegut, Infinite Jest by David Foster Wallace, Decline and Fall by Evelyn Waugh, Vile Bodies by Evelyn Waugh, Black Mischief by Evelyn Waugh, Scoop by Evelyn Waugh, The Loved One by Evelyn Waugh, A Handful of Dust by Evelyn Waugh , The Life and Loves of a She-Devil by Fay Weldon, Tono Bungay by HG Wells, Molesworth by Geoffrey Willans and Ronald Searle, The Wimbledon Poisoner by Nigel Williams, Anglo-Saxon Attitudes by Angus Wilson, Something Fresh by PG Wodehouse, Piccadilly Jim by PG Wodehouse, Thank You Jeeves by PG Wodehouse, Heavy Weather by PG Wodehouse, The Code of the Woosters by PG Wodehouse, Joy in the Morning by PG Wodehouse";


function generateBooks(n) {


    // __rawBooks is defined in books.js
    var booksArray = __rawBooks.split(',');
    var numBooks = n || booksArray.length - 1;
    var categories = ['classic', 'horror', 'romantic comedy', 'self help', 'historical'];

  
    function makeBook(bookName, id) {
      var tuple = bookName.split('by');
  
      return {
        id: id,
        title: tuple[0].trim(),
        author: tuple[1].trim(),
        price: parseFloat(randN(10, 35).toFixed(2)),
        category: randElt(categories)
      };
    }
  
    return reduce(take(booksArray, numBooks), function(books, s, i) {
      return conj(books, makeBook(s, i));
    }, []);
  }

   function  makeStore(book){
     book = generateBooks.makeBook();
    return {},

    function displayBook(){
        return  book.title + ", by" + book.author+ "/ CATEGORY:" + book.category +" / PRICE:"+ book.price  +"/ ID:"+ book.id
       },
    function displayBooks(arrayOfBooks){
        str=" "
        for ( var i=0;i<arrayOfBooks.length;i++){
            str=str+(i+1)+"-"+displayBook(arrayOfBooks[i])+".\n"
        }
        console.log (str) 
       },
    function searchBooks(arrayOfBooks,query){
        
        for (var i=0;i<arrayOfBooks.length;i++){
            var x=arrayOfBooks[i]
        if (((x.title+book.author+book.category).toLowerCase().indexOf(query.toLowerCase())) !== -1){
            return true 
             }
             else {
                return false 
             }
             }
             },
    function getBook(book){
        for (var i=0;i<arrayOfBooks.length;i++){
            if (arrayOfBooks[i].id===book.id){
                return book 
            }
            }
             },
    function removeBook(book,arrayOfBooks){
        for (var i=0;i<arrayOfBooks.length;i++){
        if (book.id===arrayOfBooks[i].id){
            arrayOfBooks.splice(i,1)
        }
        }
    return arrayOfBooks
        }
    }
var bookStore = makeStore();

function cart(){
    var cart=[]
  function makrCart(title,price,id){
    var myObj={}
    myObj.title=title,
    myObj.price=price,
    myObj.id=id
    return myObj
  }
    
    myObj.addBook=function(book){
        cart.push(book)
        return cart 
    },
    myObj.display=function(){
       return  "The name of book is  " + book.title + " / PRICE:"+ book.price  +"/ ID:" + book.id
    },

    myObj.removeBook=function (cart,book) {
   
        for (var i = 0; i < cart.length; i++) {
          if (cart[i].id === book.id) {
            arr.push(cart.splice(i, 1));
      
            return "removed" + book;
          }
        }
        return "could not find " + book ;
      },
      
      myObj.total=function(){
        sumWithInitial=cart.price.reduce((accumulator, currentValue) => accumulator + currentValue,0)
        return sumWithInitial
            
      }
      

}
  









