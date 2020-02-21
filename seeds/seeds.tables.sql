BEGIN;

TRUNCATE
  folders,
  notes
--   "user"
RESTART IDENTITY CASCADE;

INSERT INTO folders ("name")
VALUES 
('Important'),('Super'),('Spangley');

INSERT INTO notes ("name", "folderid", "content")

VALUES 
('help', 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum nec tortor dignissim efficitur. Mauris.'),
('order', 2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum nec tortor dignissim efficitur. Mauris.');
-- ('order', 2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum nec tortor dignissim efficitur. Mauris.', 01/28/2020),
-- ('order', 2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum nec tortor dignissim efficitur. Mauris.', 01/21/2020),
-- ('help', 3, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum nec tortor dignissim efficitur. Mauris.', 01/9/2020),
-- ('help', 3, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum nec tortor dignissim efficitur. Mauris.', 01/21/2020),
-- ('help', 3, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum nec tortor dignissim efficitur. Mauris.', 01/11/2020),
-- ('help', 3, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum nec tortor dignissim efficitur. Mauris.', 01/09/2020),
-- ('order', 2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum nec tortor dignissim efficitur. Mauris.', 01/08/2020),
-- ('must see', 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum nec tortor dignissim efficitur. Mauris.', 01/06/2020),
-- ('must see', 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum nec tortor dignissim efficitur. Mauris.', 01/01/2020),
-- ('help', 3, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum nec tortor dignissim efficitur. Mauris.', 01/03/2020);
-- ('must see', 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum nec tortor dignissim efficitur. Mauris.', 01/02/2020);

--must end every seed file to complete seeding with: 

-- INSERT INTO notes (id, content, folderId, name, modified)
-- VALUES (
--     "cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1", "Dogs", "2019-01-03T00:00:00.000Z", "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur pretium lorem, pellentesque ornare magna. Phasellus id tristique orci. Suspendisse dictum a ipsum sed egestas. Curabitur id laoreet ligula, id tincidunt elit. Aenean molestie lacinia accumsan. Ut ac fermentum risus, tristique congue nisi. Suspendisse in sem lectus. Quisque malesuada, mi eget auctor vestibulum, ligula quam ultricies purus, sed placerat ex lectus at justo. In hac habitasse platea dictumst. Duis eleifend neque quis consectetur fringilla."
-- )

COMMIT;