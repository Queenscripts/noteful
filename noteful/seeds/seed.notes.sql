BEGIN;
--always start sql seed folder with begin to initiate seeding
TRUNCATE 
notes,
folders
RESTART IDENTITY CASCADE

INSERT INTO folders 
VALUES 
('helpful'),
('interesting'),
('important');

INSERT INTO notes (name, folder_id, description)

VALUES 
('help', 3, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum nec tortor dignissim efficitur. Mauris.'),
('help', 3, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum nec tortor dignissim efficitur. Mauris.'),
('order', 2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum nec tortor dignissim efficitur. Mauris.'),
('order', 2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum nec tortor dignissim efficitur. Mauris.'),
('help', 3, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum nec tortor dignissim efficitur. Mauris.'),
('help', 3, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum nec tortor dignissim efficitur. Mauris.'),
('help', 3, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum nec tortor dignissim efficitur. Mauris.'),
('help', 3, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum nec tortor dignissim efficitur. Mauris.'),
('order', 2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum nec tortor dignissim efficitur. Mauris.'),
('must see', 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum nec tortor dignissim efficitur. Mauris.'),
('must see', 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum nec tortor dignissim efficitur. Mauris.'),
('help', 3, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum nec tortor dignissim efficitur. Mauris.'),
('must see', 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum nec tortor dignissim efficitur. Mauris.')

--must end every seed file to complete seeding with: 

COMMIT;