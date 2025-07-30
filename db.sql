CREATE DATABASE pagination_primer;

USE pagination_primer;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    location VARCHAR(255)
);

-- dummy values
INSERT INTO users(username, email, location)
VALUES
    ('lancelot','lancelot@gmail.com','nairobi'),
    ('perceival','perceival@gmail.com','nakuru'),
    ('morgana','morgana@gmail.com','eldoret'),
    ('arthur','arthur@gmail.com','mombasa'),
    ('guinevere','guinevere@gmail.com','kisumu'),
    ('gawain','gawain@gmail.com','nyeri'),
    ('tristan','tristan@gmail.com','thika'),
    ('galahad','galahad@gmail.com','machakos'),
    ('merlin','merlin@gmail.com','kitale'),
    ('elaine','elaine@gmail.com','malindi'),
    ('kay','kay@gmail.com','kericho'),
    ('leon','leon@gmail.com','embu'),
    ('vivian','vivian@gmail.com','kakamega'),
    ('mordred','mordred@gmail.com','narok'),
    ('isolde','isolde@gmail.com','bungoma'),
    ('uther','uther@gmail.com','nyahururu'),
    ('agravaine','agravaine@gmail.com','kisii'),
    ('lot','lot@gmail.com','lodwar'),
    ('igraine','igraine@gmail.com','lamu'),
    ('pelleas','pelleas@gmail.com','homabay'),
    ('gareth','gareth@gmail.com','nyamira'),
    ('palamedes','palamedes@gmail.com','kitui'),
    ('yvaine','yvaine@gmail.com','marsabit'),
    ('niniane','niniane@gmail.com','makueni'),
    ('dagonet','dagonet@gmail.com','kilifi'),
    ('bedivere','bedivere@gmail.com','busia'),
    ('bors','bors@gmail.com','garissa'),
    ('blanchefleur','blanchefleur@gmail.com','isiolo'),
    ('balin','balin@gmail.com','meru'),
    ('balan','balan@gmail.com','murang’a'),
    ('meliodas','meliodas@gmail.com','voi'),
    ('geraint','geraint@gmail.com','wajir'),
    ('leodegrance','leodegrance@gmail.com','nanyuki'),
    ('brangaine','brangaine@gmail.com','naivasha'),
    ('lugh','lugh@gmail.com','kajiado'),
    ('cador','cador@gmail.com','embu'),
    ('tristram','tristram@gmail.com','nakuru'),
    ('ector','ector@gmail.com','nairobi'),
    ('tom','tom@gmail.com','kilgoris'),
    ('elspeth','elspeth@gmail.com','rumuruti'),
    ('liam','liam@gmail.com','webuye'),
    ('sorcha','sorcha@gmail.com','tharaka'),
    ('aeron','aeron@gmail.com','kibwezi'),
    ('cerys','cerys@gmail.com','kapenguria'),
    ('ronan','ronan@gmail.com','kitengela'),
    ('nevan','nevan@gmail.com','eldama ravine'),
    ('fianna','fianna@gmail.com','nandi hills'),
    ('rowan','rowan@gmail.com','kapsabet'),
    ('selene','selene@gmail.com','karatina'),
    ('orin','orin@gmail.com','mwea');
