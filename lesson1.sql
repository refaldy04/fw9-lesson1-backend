--
-- PostgreSQL database dump
--

-- Dumped from database version 14.3
-- Dumped by pg_dump version 14.3

-- Started on 2022-09-28 00:01:25

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO postgres;

--
-- TOC entry 3312 (class 0 OID 0)
-- Dependencies: 3
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 209 (class 1259 OID 73729)
-- Name: message; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.message (
    message character varying,
    name character varying,
    email character varying,
    id integer NOT NULL
);


ALTER TABLE public.message OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 73734)
-- Name: message_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.message ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.message_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 3305 (class 0 OID 73729)
-- Dependencies: 209
-- Data for Name: message; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.message OVERRIDING SYSTEM VALUE VALUES ('tes', 'jhon', 'jhon@mail.com', 1);
INSERT INTO public.message OVERRIDING SYSTEM VALUE VALUES ('tes', 'jhon', 'jhon@mail.com', 2);
INSERT INTO public.message OVERRIDING SYSTEM VALUE VALUES ('tes', 'jhon', 'jhon@mail.com', 3);
INSERT INTO public.message OVERRIDING SYSTEM VALUE VALUES ('tes', 'jhon', 'jhon@mail.com', 4);
INSERT INTO public.message OVERRIDING SYSTEM VALUE VALUES ('hallo', 'Refaldy Bagas', 'refaldybanggana@gmail.com', 6);
INSERT INTO public.message OVERRIDING SYSTEM VALUE VALUES ('hello', 'gundala', 'ajeng@gmail.com', 7);
INSERT INTO public.message OVERRIDING SYSTEM VALUE VALUES ('tes', 'table', 'refaldybanggana@gmail.com', 8);
INSERT INTO public.message OVERRIDING SYSTEM VALUE VALUES ('hallo', 'table', 'refaldybanggana@gmail.com', 9);
INSERT INTO public.message OVERRIDING SYSTEM VALUE VALUES ('hallo', 'tes', 'tes@mail.com', 10);
INSERT INTO public.message OVERRIDING SYSTEM VALUE VALUES ('hallo', 'res', 'res@mail.com', 11);
INSERT INTO public.message OVERRIDING SYSTEM VALUE VALUES ('malam', 'Refaldy Bagas', 'refaldybanggana@gmail.com', 12);


--
-- TOC entry 3313 (class 0 OID 0)
-- Dependencies: 210
-- Name: message_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.message_id_seq', 12, true);


--
-- TOC entry 3165 (class 2606 OID 73741)
-- Name: message message_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.message
    ADD CONSTRAINT message_pk PRIMARY KEY (id);


-- Completed on 2022-09-28 00:01:27

--
-- PostgreSQL database dump complete
--

