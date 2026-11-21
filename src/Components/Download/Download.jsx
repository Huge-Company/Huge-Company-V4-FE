import Cards from '../Card/Cards';
import downloadGroups from './data';
import SiteLayout from '../Layout/SiteLayout'

import './Download.css';

export default function Download() {
  return (
    <SiteLayout>
      <main className="download-page">
        <header className="download-intro">
          <span>DOCUMENT LIBRARY</span>
          <h1>Find a document by name.</h1>
          <p>Choose a letter range to browse the available departmental checklists and reports.</p>
        </header>
        <Cards groups={downloadGroups} />
      </main>
    </SiteLayout>
  );
}
