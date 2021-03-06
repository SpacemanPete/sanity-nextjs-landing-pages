// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document types
import homepage from './documents/homepage';
import page from './documents/page';
import newsArticle from './documents/newsArticle';
import siteConfig from './documents/siteConfig';

// Object types
import cta from './objects/cta';
import menu from './documents/menu';
import embedHTML from './objects/embedHTML';
import figure from './objects/figure';
import internalLink from './objects/internalLink';
import customLink from './objects/customLink';
import link from './objects/link';
import portableText from './objects/portableText';
import simplePortableText from './objects/simplePortableText';

// Landing page sections
import hero from './sections/hero';
import imageSection from './sections/imageSection';
import textSection from './sections/textSection';
import listSection from './sections/listSection';
import netlifyForm from './sections/netlifyForm';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    cta,
    embedHTML,
    figure,
    hero,
    imageSection,
    internalLink,
    customLink,
    link,
    homepage,
    page,
    newsArticle,
    portableText,
    menu,
    simplePortableText,
    siteConfig,
    textSection,
    listSection,
    netlifyForm,
  ]),
});
