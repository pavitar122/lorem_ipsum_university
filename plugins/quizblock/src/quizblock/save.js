import { useBlockProps } from '@wordpress/block-editor';
import './style.css';

export default function save({ attributes }) {
  const blockProps = useBlockProps.save({
    className: 'my-block-frontend'
  });

  return (
    <div {...blockProps}>
      <h2 className="my-block-frontend__title">Frontend View</h2>
      <p className="my-block-frontend__content">This is how your block looks on the frontend.</p>
    </div>
  );
}