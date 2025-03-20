import fathersandsons from '../assets/fathersandsons.jpg'
import behave from '../assets/behave.jpg'
import phm from '../assets/project-hail-mary.jpg'
import sg from '../assets/sportsgene.jpg'
import dn from '../assets/dopaminenation.jpg'
import tsatt from '../assets/thespyandthetraitor.jpg'
import iig from '../assets/interpreteringo.jpg'
import tag from '../assets/theanxiousgeneration.jpg'
import wepskam from '../assets/programmershouldknowaboutmemory.png'
import ddia from '../assets/hogbook.jpg'
import tsis from '../assets/thesportissteroids.jpg'

const ALYIR = () => {
  return (
    <div className='content-section'>
      <div className='card'>
        <p>
          At the end of the year, I like to post some books and papers (both good and bad) I've read
          since January 1<sup>st</sup> and give some personal thoughts and recommendations. I
          usually do this on Instagram stories, but keeping a permanent running list is something
          I've wanted to do. Since this is the first edition on my website, I'll post a
          non-exhaustive list of my all-time favorite books to provide readers some context.
        </p>

        <h2>2024</h2>
        <h3>Behave - Dr. Robert Sapolsky</h3>
        <a
          href='https://www.amazon.com/Behave-Biology-Humans-Best-Worst/dp/009957506X'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={behave} alt='Behave Book Cover' className='book-cover' />
        </a>
        <p>
          Emotional intelligence meets biology meets mythbusters. Good science communication is
          extremely difficult, but this book seems oblivious to that fact. The book references many
          old and new studies without getting bland. It's on the denser side, but I would highly
          recommend it for anyone interested in interpersonal connections.
        </p>

        <h3>Project Hail Mary - Andy Weir</h3>
        <a
          href='https://www.amazon.com/Project-Hail-Mary-Andy-Weir/dp/0593135229'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src={phm}
            alt='Project Hail Mary Book Cover'
            style={{ width: '250px', height: 'auto' }}
          />
        </a>
        <p>
          I read this directly after <i>Behave</i> as my brain needed a break from nonfiction. I
          probably could have read the entire book in a day. Loved the writing style and storyline.
          Hope the upcoming movie holds up to the book.
        </p>

        <h3>The Spy and The Traitor - Ben Macintyre</h3>
        <a
          href='https://www.amazon.com/Spy-Traitor-Greatest-Espionage-Story/dp/1101904216'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src={tsatt}
            alt='The Spy and The Traitor Book Cover'
            style={{ width: '250px', height: 'auto' }}
          />
        </a>
        <p>
          Cold War. Espionage. Family ties. Political chess. Hot extractions. I recommend the book
          if you're interested in any of those.
        </p>

        <h3>Writing an Interpreter in Go - Thorsten Ball</h3>
        <a
          href='https://www.amazon.com/Writing-Interpreter-Go-Thorsten-Ball/dp/300055808X'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src={iig}
            alt='Writing an Interpreter in Go Book Cover'
            style={{ width: '250px', height: 'auto' }}
          />
        </a>
        <p>
          I've been wanting to read the sequel to this book, <i>Writing a Compiler in Go</i>, for a
          while now. I figured I'd start with the prequel first. It's succinct and includes code
          examples and explanations.
        </p>

        <h3>The Anxious Generation - Dr. Jonathan Haidt</h3>
        <a
          href='https://www.amazon.com/Anxious-Generation-Rewiring-Childhood-Epidemic/dp/0593655036'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src={tag}
            alt='The Anxious Generation Book Cover'
            style={{ width: '250px', height: 'auto' }}
          />
        </a>
        <p>
          This was recommended to me after I read <i>Dopamine Nation</i>. This book is another good
          example of science communication done well. My only gripe is that <i>some</i> citations
          reference news media statistics, which could probably (maybe easily?) be replaced with
          some double blind, RCTs.
        </p>

        <h3>What Every Programmer Should Know About Memory - Ulrich Drepper</h3>
        <a
          href='https://people.freebsd.org/~lstewart/articles/cpumemory.pdf'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src={wepskam}
            alt='What Every Programmer Should Know About Memory Paper Cover'
            style={{ width: '250px', height: 'auto' }}
          />
        </a>
        <p>
          This is a paper written in 2007, but many of the principles still hold. It's 5 chapters of
          dense architecture diagrams and physical memory layouts, but the 6th chapter makes it all
          worth it.{' '}
        </p>

        <h2>My Goats</h2>
        <h3>The Sports Gene - David Epstein</h3>
        <a
          href='https://www.amazon.com/Sports-Gene-Extraordinary-Athletic-Performance/dp/161723012X'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src={sg}
            alt='The Sports Gene Book Cover'
            style={{ width: '250px', height: 'auto' }}
          />
        </a>
        <p>Remember what I said about science communication? Yeah, this one is excellent.</p>

        <h3>Dopamine Nation - Dr. Anna Lembke</h3>
        <a
          href='https://www.amazon.com/Dopamine-Nation-Finding-Balance-Indulgence/dp/152474672X'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src={dn}
            alt='Dopamine Nation Book Cover'
            style={{ width: '250px', height: 'auto' }}
          />
        </a>
        <p>
          Cover states it well already. Wish this book had more neuroscience considerations, but the
          subject matter makes it relevant enough.
        </p>

        <h3>Fathers and Sons - Ivan Turgenev</h3>
        <a
          href='https://www.amazon.com/Fathers-Sons-Penguin-Classics-Turgenev/dp/014144133X'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src={fathersandsons}
            alt='Fathers and Sons Book Cover'
            style={{ width: '250px', height: 'auto' }}
          />
        </a>
        <p>
          "As we all know, time sometimes flies like a bird, and sometimes crawls like a worm, but
          people may be unusually happy when they do not even notice whether time has passed quickly
          or slowly."
        </p>

        <h3>Designing Data Intensive Applications - Martin Kleppman</h3>
        <a
          href='https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src={ddia}
            alt='Designing Data Intensive Applications Book Cover'
            style={{ width: '250px', height: 'auto' }}
          />
        </a>
        <p>HOG BOOK SUPREMACY.</p>

        <h3>The Sport is Steroids</h3>
        <a
          href='https://www.amazon.com/Sport-Steroids-Athletes-Quest-Records-ebook/dp/B08KT7MD9B'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src={tsis}
            alt='The Sport is Steroids Book Cover'
            style={{ width: '250px', height: 'auto' }}
          />
        </a>
        <p>Fairness in sport is harder than you think.</p>
      </div>
    </div>
  )
}
export default ALYIR
