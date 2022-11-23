export const editorConfig = {
  toolbar: ['heading', 'bold', 'italic', 'bulletedList', 'numberedList'],
  removePlugins: ['Image', 'ImageToolbar', 'ImageStyle', 'ImageUpload', 'ImageCaption'],
  heading: {
    options: [
      {
        model: 'paragraph',
        title: 'Paragraph',
        class: 'ck-heading_paragraph',
      },
      {
        model: 'heading2',
        view: 'h2',
        title: 'Heading',
        class: 'ck-heading_heading2',
      },
    ],
  },
};
