import { useBlockProps } from "@wordpress/block-editor";
import { useEffect, useState } from "@wordpress/element";
import "./editor.css";

export default function Edit({ attributes, setAttributes }) {
	const [react, setreact] = useState("Pavitar");
	const blockProps = useBlockProps({
		className: "my-block-editor",
	});

	return (
		<div {...blockProps}>
			<h2 className="my-block-editor__title">Quiz Block</h2>
			<p className="my-block-editor__content">
				This is how your block looks in the editor Pavitar Singh. {attributes.name}
			</p>
		</div>
	);
}
