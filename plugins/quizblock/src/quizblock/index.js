import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
import './editor.css';
import './style.css';

registerBlockType('create-block/my-block-name', {
  edit: Edit,
  save,
});