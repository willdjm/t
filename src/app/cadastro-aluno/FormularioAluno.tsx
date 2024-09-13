"use client";

import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { FaCheck, FaRegUserCircle } from 'react-icons/fa';
import { FaHouseCircleCheck } from 'react-icons/fa6';
import { ImBook } from 'react-icons/im';
import { GiExitDoor } from 'react-icons/gi';
import { HiOutlineIdentification } from 'react-icons/hi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormErrors {
  [key: string]: string | undefined; // Permite qualquer chave de string e valores como string ou undefined
}

interface FormData {
  nome: string;
  cpf: string;
  sexo: string;
  dataNascimento: string;
  nivelFormacao: string;
  nomeEscolaAluno: string;
  cepEscola: string;
  ruaEscola: string;
  numeroEscola: string;
  complementoEscola: string;
  bairroEscola: string;
  cidadeEscola: string;
  estadoEscola: string;
  tipoEscola: string;
  anoIngresso: string;
  nivelEscolaridadeAtual: string;
  cursoAtual: string;
  cepAluno: string;
  ruaAluno: string;
  numeroAluno: string;
  complementoAluno: string;
  bairroAluno: string;
  cidadeAluno: string;
  estadoAluno: string;
  senhaAtual: string;
  novaSenha: string;
  confirmarNovaSenha: string;
}

export const FormularioAluno: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    cpf: '',
    sexo: '',
    dataNascimento: '',
    nivelFormacao: '',
    nomeEscolaAluno: '',
    cepEscola: '',
    ruaEscola: '',
    numeroEscola: '',
    complementoEscola: '',
    bairroEscola: '',
    cidadeEscola: '',
    estadoEscola: '',
    tipoEscola: '',
    anoIngresso: '',
    nivelEscolaridadeAtual: '',
    cursoAtual: '',
    cepAluno: '',
    ruaAluno: '',
    numeroAluno: '',
    complementoAluno: '',
    bairroAluno: '',
    cidadeAluno: '',
    estadoAluno: '',
    senhaAtual: '',
    novaSenha: '',
    confirmarNovaSenha: '',
  });

  // MASCARAS
  // CPF
  const maskCpf = (value: string) => {
    // Remove todos os caracteres não numéricos
    const cleaned = value.replace(/\D+/g, '');

    // Aplica a máscara somente se o valor tiver exatamente 11 dígitos
    if (cleaned.length <= 3) {
      return cleaned;
    } else if (cleaned.length <= 6) {
      return `${cleaned.slice(0, 3)}.${cleaned.slice(3)}`;
    } else if (cleaned.length <= 9) {
      return `${cleaned.slice(0, 3)}.${cleaned.slice(3, 6)}.${cleaned.slice(6)}`;
    } else {
      return `${cleaned.slice(0, 3)}.${cleaned.slice(3, 6)}.${cleaned.slice(6, 9)}-${cleaned.slice(9, 11)}`;
    }
  };

  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    if (formData.cepEscola && /^[0-9]{8}$/.test(formData.cepEscola)) {
      fetchAddress(formData.cepEscola, 'Escola');
    } else {
      setErrors(prevErrors => ({
        ...prevErrors,
        cepEscola: 'CEP inválido'
      }));
    }
  }, [formData.cepEscola]);

  useEffect(() => {
    if (formData.cepAluno && /^[0-9]{8}$/.test(formData.cepAluno)) {
      fetchAddress(formData.cepAluno, 'Aluno');
    } else {
      setErrors(prevErrors => ({
        ...prevErrors,
        cepAluno: 'CEP inválido'
      }));
    }
  }, [formData.cepAluno]);

  const fetchAddress = async (cep: string, type: 'Escola' | 'Aluno') => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

      // Verifica se o CEP retornou um endereço válido
      if (response.data.erro) {
        // Se o CEP é inválido, defina um erro no estado
        setErrors(prevErrors => ({
          ...prevErrors,
          [`cep${type}`]: 'CEP não encontrado'
        }));
        return;
      }

      const { logradouro, bairro, localidade, uf } = response.data;
      setFormData(prevData => ({
        ...prevData,
        [`rua${type}`]: logradouro,
        [`bairro${type}`]: bairro,
        [`cidade${type}`]: localidade,
        [`estado${type}`]: uf,
      }));

      // Limpa o erro após um CEP válido
      setErrors(prevErrors => ({
        ...prevErrors,
        [`cep${type}`]: undefined
      }));

      // Foco no próximo campo
      setTimeout(() => {
        document.getElementById(type === 'Escola' ? 'numeroEscola' : 'numeroAluno')?.focus();
      }, 100);

    } catch (error) {
      console.error('Erro ao buscar o endereço:', error);
      setErrors(prevErrors => ({
        ...prevErrors,
        [`cep${type}`]: 'Erro ao buscar o CEP'
      }));
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Filtra caracteres não numéricos e aplica a máscara se o campo for CPF
    const cleanedValue = value.replace(/\D/g, '');
    const formattedValue = name === 'cpf' ? maskCpf(cleanedValue) : value;

    setFormData(prevData => ({ ...prevData, [name]: formattedValue }));

    // Remove erro se existir para o campo sendo atualizado
    if (name in errors) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: undefined }));
    }
  };

  const validateStep = (): boolean => {
    const currentErrors: FormErrors = {};

    switch (step) {
      case 1:
        if (!formData.nome) currentErrors.nome = 'Nome é obrigatório';
        if (formData.cpf.length !== 14) currentErrors.cpf = 'CPF deve ter exatamente 11 dígitos';
        if (!formData.cpf) currentErrors.cpf = 'CPF é obrigatório';
        if (!formData.sexo) currentErrors.sexo = 'Sexo é obrigatório';
        if (!formData.dataNascimento) currentErrors.dataNascimento = 'Data de Nascimento é obrigatória';
        break;
      case 2:
        if (!formData.nivelFormacao) currentErrors.nivelFormacao = 'Nível de Formação é obrigatório';
        if (!formData.nomeEscolaAluno) currentErrors.nomeEscolaAluno = 'Nome da Escola é obrigatório';
        if (!formData.cepEscola) currentErrors.cepEscola = 'CEP da Escola é obrigatório';
        if (formData.cepEscola.length !== 8) currentErrors.cepEscola = 'CEP deve ter 8 números';
        if (!formData.numeroEscola) currentErrors.numeroEscola = 'Nº é obrigatório';
        if (!formData.tipoEscola) currentErrors.tipoEscola = 'Tipo de Escola é obrigatório';
        if (!formData.nivelEscolaridadeAtual) currentErrors.nivelEscolaridadeAtual = 'Nível de Escolaridade Atual é obrigatório';
        if (!formData.cursoAtual) currentErrors.cursoAtual = 'Curso Atual é obrigatório';
        break;
      case 3:
        if (!formData.cepAluno) currentErrors.cepAluno = 'CEP do Aluno é obrigatório';
        if (formData.cepAluno.length !== 8) currentErrors.cepAluno = 'CEP deve ter 8 números';
        if (!formData.numeroAluno) currentErrors.numeroAluno = 'Número é obrigatório';
        break;
      case 4:
        if (!formData.senhaAtual) currentErrors.senhaAtual = 'Senha Atual é obrigatória';
        if (!formData.novaSenha) currentErrors.novaSenha = 'Nova Senha é obrigatória';
        if (formData.novaSenha !== formData.confirmarNovaSenha) currentErrors.confirmarNovaSenha = 'Senhas não conferem';
        break;
      default:
        break;
    }

    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handleStepChange = (newStep: number) => {
    if (newStep < step || validateStep()) {
      setStep(newStep);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (validateStep()) {
      const organizedData = {
        DadosPessoais: {
          Nome: formData.nome,
          CPF: formData.cpf,
          Sexo: formData.sexo,
          DataNascimento: formData.dataNascimento,
        },
        DadosEscolares: {
          NivelFormacao: formData.nivelFormacao,
          nomeEscolaAluno: formData.nomeEscolaAluno,
          EnderecoEscola: {
            Cep: formData.cepEscola,
            Rua: formData.ruaEscola,
            Numero: formData.numeroEscola,
            Complemento: formData.complementoEscola,
            Bairro: formData.bairroEscola,
            Cidade: formData.cidadeEscola,
            Estado: formData.estadoEscola,
          },
          TipoEscola: formData.tipoEscola,
          AnoIngresso: formData.anoIngresso,
          NivelEscolaridadeAtual: formData.nivelEscolaridadeAtual,
          CursoAtual: formData.cursoAtual,
        },
        DadosAluno: {
          EnderecoAluno: {
            Cep: formData.cepAluno,
            Rua: formData.ruaAluno,
            Numero: formData.numeroAluno,
            Complemento: formData.complementoAluno,
            Bairro: formData.bairroAluno,
            Cidade: formData.cidadeAluno,
            Estado: formData.estadoAluno,
          },
        },
        AlterarSenha: {
          SenhaAtual: formData.senhaAtual,
          NovaSenha: formData.novaSenha,
          ConfirmarNovaSenha: formData.confirmarNovaSenha,
        },
      };

      try {
        await axios.post('', formData);
        console.log('Dados organizados para envio:', JSON.stringify(organizedData, null, 2));
        toast.success('Cadastrado com sucesso! Aguarde, estamos direcionando para finalizar seu cadastro.');

        // Redirecionar após 5 segundos
        setTimeout(() => {
          window.location.href = '/conteudo-aluno';
        }, 5000); // 5000 milissegundos = 5 segundos

      } catch (error) {
        console.error('Erro ao enviar o formulário:', error);
        toast.error('Houve um erro em sua tentativa, tente novamente mais tarde!');
      }
    }
  };

  return (
    <div className="p-4 sm:p-8 lg:p-10 max-w-4xl mx-auto bg-white rounded-lg shadow-lg my-10">
      <form className='' onSubmit={handleSubmit}>
        <div className="flex flex-wrap sm:flex-nowrap justify-between mb-6 border-b-2 border-green-900">
          <div
            className={`step flex items-center cursor-pointer border-b-2 px-4 py-2 space-x-2 ${step === 1 ? 'text-green-900 font-bold border-green-900 border-b-4' : 'text-gray-500'}`}
            onClick={() => handleStepChange(1)}
          >
            <FaRegUserCircle className="inline-block mr-2 text-xl sm:text-2xl" />
            <span className="hidden sm:inline">Dados Pessoais</span>
          </div>
          <div
            className={`step flex items-center cursor-pointer border-b-2 px-4 py-2 space-x-2 ${step === 2 ? 'text-green-900 font-bold border-green-900 border-b-4' : 'text-gray-500'}`}
            onClick={() => handleStepChange(2)}
          >
            <ImBook className="inline-block mr-2 text-xl sm:text-2xl" />
            <span className="hidden sm:inline">Dados Escolares</span>
          </div>
          <div
            className={`step flex items-center cursor-pointer border-b-2 px-4 py-2 space-x-2 ${step === 3 ? 'text-green-900 font-bold border-green-900 border-b-4' : 'text-gray-500'}`}
            onClick={() => handleStepChange(3)}
          >
            <FaHouseCircleCheck className="inline-block mr-2 text-xl sm:text-2xl" />
            <span className="hidden sm:inline">Endereço</span>
          </div>
          <div
            className={`step flex items-center cursor-pointer border-b-2 px-4 py-2 space-x-2 ${step === 4 ? 'text-green-900 font-bold border-green-900 border-b-4' : 'text-gray-500'}`}
            onClick={() => handleStepChange(4)}
          >
            <GiExitDoor className="inline-block mr-2 text-xl sm:text-2xl" />
            <span className="hidden sm:inline">Acesso</span>
          </div>
        </div>
        <div className='relative border border-gray-200 rounded-lg md:p-8 p-4 mt-10'>
          <div className="absolute -top-4 md:left-20 left-8 font-semibold bg-white border border-gray-300 text-white rounded text-sm sm:text-base flex">
            <div className="flex items-center bg-gray-300 rounded-md border border-gray-100">
              <div className="flex items-center justify-center rounded-l-md w-10 h-10 bg-gradient-to-b from-yellow-300 to-amber-400">
                <FaCheck />
              </div>
              <span className="text-black font-medium px-3">Aluno</span>
            </div>
          </div>
          <div className='pt-10'>
            {step === 1 && (
              <div className='w-full items-center justify-center'>
                {/* Nome */}
                <div className="md:mb-7 mb-2">
                  <div className="relative flex flex-col w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FaRegUserCircle className="text-black" />
                    </div>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      placeholder="Nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-3 py-2 rounded-lg bg-gray-300 border border-gray-100 outline-none focus:outline-none focus:ring-1 placeholder:text-gray-500 ${errors.nome ? 'border-red-500 focus:ring-red-500' : 'focus:ring-gray-400'}`}
                      onFocus={() => errors.nome && setErrors(prevErrors => ({ ...prevErrors, nome: undefined }))}
                    />

                  </div>
                  {errors.nome && (
                    <div className="flex items-center">
                      <p className="text-red-500 text-xs mt-1">{errors.nome}</p>
                    </div>
                  )}
                </div>
                {/* CPF */}
                <div className='md:mb-7 mb-2'>
                  <div className="relative flex flex-col w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <HiOutlineIdentification size={20} className="text-black" />
                    </div>
                    <input
                      type="text"
                      id="cpf"
                      name="cpf"
                      placeholder="CPF"
                      value={formData.cpf}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-3 py-2 rounded-lg bg-gray-300 border border-gray-100 outline-none focus:outline-none focus:ring-1 placeholder:text-gray-500 ${errors.cpf ? 'border-red-500 focus:ring-red-500' : 'focus:ring-gray-400'}`}
                      onFocus={() => errors.cpf && setErrors(prevErrors => ({ ...prevErrors, cpf: undefined }))}
                      maxLength={14} // Limita a quantidade de caracteres para a máscara
                      pattern="\d*" // Garante que apenas números sejam permitidos
                    />
                  </div>
                  {errors.cpf && (
                    <div className="flex items-center">
                      <p className="text-red-500 text-xs mt-1">{errors.cpf}</p>
                    </div>
                  )}
                </div>
                {/* Sexo */}
                <div className="relative flex flex-col w-full md:mb-7 mb-2">
                  <label htmlFor="sexo" className="block mb-1 text-sm font-medium text-gray-700">Sexo:</label>
                  <div className="relative">
                    <select
                      id="sexo"
                      name="sexo"
                      value={formData.sexo}
                      onChange={handleInputChange}
                      className={`w-full pl-4 pr-3 py-2 rounded-lg bg-gray-300 border border-gray-100 outline-none focus:outline-none focus:ring-1 placeholder:text-gray-500 ${errors.sexo ? 'border-red-500 focus:ring-red-500' : 'focus:ring-gray-400'}`}
                      onFocus={() => errors.sexo && setErrors(prevErrors => ({ ...prevErrors, sexo: undefined }))}
                    >
                      <option value="">Selecione</option>
                      <option value="masculino">Masculino</option>
                      <option value="feminino">Feminino</option>
                      <option value="outros">Outros</option>
                    </select>
                    {errors.sexo && (
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      </div>
                    )}
                  </div>
                  {errors.sexo && (
                    <div className="flex items-center mt-1">
                      <p className="text-red-500 text-xs">{errors.sexo}</p>
                    </div>
                  )}
                </div>
                {/* Data de Nascimento */}
                <div className="relative flex flex-col w-full md:mb-7 mb-2">
                  <label htmlFor="dataNascimento" className="block mb-1 text-sm font-medium text-gray-700">Data de Nascimento:</label>
                  <div className="relative">
                    <input
                      type="date"
                      id="dataNascimento"
                      name="dataNascimento"
                      value={formData.dataNascimento}
                      onChange={handleInputChange}
                      className={`w-full pl-4 pr-3 py-2 rounded-lg bg-gray-300 border border-gray-100 outline-none focus:outline-none focus:ring-1 placeholder:text-gray-500 ${errors.dataNascimento ? 'border-red-500 focus:ring-red-400' : 'focus:ring-gray-500'}`}
                      onFocus={() => errors.dataNascimento && setErrors(prevErrors => ({ ...prevErrors, dataNascimento: undefined }))}
                    />
                    {errors.dataNascimento && (
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      </div>
                    )}
                  </div>
                  {errors.dataNascimento && (
                    <div className="flex items-center mt-1">
                      <p className="text-red-500 text-xs">{errors.dataNascimento}</p>
                    </div>
                  )}
                </div>
                <div className='flex items-center justify-end w-full'>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="next-btn text-center items-center justify-center flex bg-gradient-to-b from-amber-400 to-amber-500 text-black px-8 py-1.5 rounded w-full sm:w-auto"
                  >
                    Próximo
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                {/* Qual seu nível de formação? */}
                <div className="md:mb-7 mb-4">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full">
                    <label className="text-black flex-shrink-0">Qual seu nível de formação?</label>
                    <select
                      id="nivelFormacao"
                      name="nivelFormacao"
                      value={formData.nivelFormacao}
                      onChange={handleInputChange}
                      className="flex-grow w-full py-2 px-3 rounded-lg bg-gray-300 border border-gray-100 outline-none focus:outline-none focus:ring-1 focus:ring-gray-400"
                      onFocus={() => errors.nivelFormacao && setErrors(prevErrors => ({ ...prevErrors, nivelFormacao: undefined }))}
                    >
                      <option value="" disabled>Selecione</option>
                      <option value="graduado">Graduado/Licenciado</option>
                      <option value="mestrado">Mestrado</option>
                      <option value="doutorado">Doutorado</option>
                      <option value="pos-doutorado">Pós-Doutorado</option>
                    </select>
                  </div>
                  {errors.nivelFormacao && <p className="text-red-500 text-xs">{errors.nivelFormacao}</p>}
                </div>
                {/* Nome da Escola */}
                <div className="mb-4">
                  <input
                    type="text"
                    id="nomeEscolaAluno"
                    name="nomeEscolaAluno"
                    placeholder="Nome da Escola"
                    value={formData.nomeEscolaAluno}
                    onChange={handleInputChange}
                    className="w-full py-2 px-3 border border-gray-100 rounded-lg bg-gray-300 outline-none focus:outline-none focus:ring-1 focus:ring-gray-400"
                    onFocus={() => errors.nomeEscolaAluno && setErrors(prevErrors => ({ ...prevErrors, nomeEscolaAluno: undefined }))}
                  />
                  {errors.nomeEscolaAluno && <p className="text-red-500 text-xs">{errors.nomeEscolaAluno}</p>}
                </div>
                {/* CEP da Escola */}
                <div className="mb-4">
                  <input
                    type="text"
                    id="cepEscola"
                    name="cepEscola"
                    placeholder="CEP"
                    value={formData.cepEscola}
                    onChange={handleInputChange}
                    className={`w-full py-2 px-3 border border-gray-100 rounded-lg bg-gray-300 outline-none focus:outline-none focus:ring-1 ${errors.cepEscola ? 'border-red-500 focus:ring-red-500' : 'focus:ring-gray-400'}`}
                    onFocus={() => errors.cepEscola && setErrors(prevErrors => ({ ...prevErrors, cepEscola: undefined }))}
                    maxLength={8}
                    pattern="\d*"
                  />
                  {errors.cepEscola && <p className="text-red-500 text-xs">{errors.cepEscola}</p>}
                </div>
                <div className="w-full flex flex-col md:flex-row md:space-x-4">
                  {/* Rua */}
                  <input
                    type="text"
                    id="ruaEscola"
                    name="ruaEscola"
                    placeholder="Rua"
                    value={formData.ruaEscola}
                    onChange={handleInputChange}
                    className="flex-1 pl-3 pr-3 py-2 mb-4 md:mb-7 rounded-lg bg-gray-300 border border-gray-100 outline-none focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder:text-gray-500"
                    onFocus={() => errors.ruaEscola && setErrors(prevErrors => ({ ...prevErrors, ruaEscola: undefined }))}
                  />
                  {/* Número */}
                  <input
                    type="text"
                    id="numeroEscola"
                    name="numeroEscola"
                    placeholder="Nº"
                    value={formData.numeroEscola}
                    onChange={handleInputChange}
                    className="md:w-24 pl-3 pr-3 py-2 mb-4 md:mb-7 rounded-lg bg-gray-300 border border-gray-100 outline-none focus:outline-none focus:ring-1 focus:ring-gray-400"
                    onFocus={() => errors.numeroEscola && setErrors(prevErrors => ({ ...prevErrors, numeroEscola: undefined }))}
                  />
                  {errors.numeroEscola && <p className="text-red-500 mb-4 md:mb-7 text-xs">{errors.numeroEscola}</p>}
                </div>
                <div className="w-full flex flex-col md:flex-row md:space-x-4">
                  {/* Complemento */}
                  <input
                    type="text"
                    id="complementoEscola"
                    name="complementoEscola"
                    placeholder="Complemento"
                    value={formData.complementoEscola}
                    onChange={handleInputChange}
                    className="flex-1 pl-3 pr-3 py-2 mb-4 md:mb-7 rounded-lg bg-gray-300 border border-gray-100 outline-none focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder:text-gray-500"
                  />
                  {/* Bairro */}
                  <input
                    type="text"
                    id="bairroEscola"
                    name="bairroEscola"
                    placeholder="Bairro"
                    value={formData.bairroEscola}
                    onChange={handleInputChange}
                    className="flex-1 pl-3 pr-3 py-2 mb-4 md:mb-7 rounded-lg bg-gray-300 border border-gray-100 outline-none focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder:text-gray-500"
                  />
                </div>
                <div className='w-full flex flex-col md:flex-row md:space-x-4'>
                  <input
                    type="text"
                    id="cidadeEscola"
                    name="cidadeEscola"
                    placeholder="Cidade"
                    value={formData.cidadeEscola}
                    onChange={handleInputChange}
                    className="flex-1 pl-3 pr-3 py-2 mb-4 md:mb-7 rounded-lg bg-gray-300 border border-gray-100 outline-none focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder:text-gray-500"
                  />
                  {/* Estado */}
                  <select
                    id="estadoEscola"
                    name="estadoEscola"
                    value={formData.estadoEscola}
                    onChange={handleInputChange}
                    className="md:w-1/3 pl-3 pr-3 py-2 mb-4 md:mb-7 rounded-lg bg-gray-300 border border-gray-100 outline-none focus:outline-none focus:ring-1 focus:ring-gray-400"
                  >
                    <option value="" disabled>Estado</option> {/* Opção padrão com valor vazio, desabilitada para que não possa ser selecionada */}
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                  </select>
                </div>
                {/* Cidade */}
                <div className='md:flex md:flex-row flex flex-col items-center justify-center md:mb-4 mb-4'>
                  {/* Tipo de Escola */}
                  <div className="mb-4 flex flex-col justify-start w-full">
                    <div className="flex w-full space-x-4">
                      <label className="block">Escola:</label>
                      <div className="flex gap-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="tipoEscola"
                            value="Publica"
                            checked={formData.tipoEscola === 'Publica'}
                            onChange={handleInputChange}
                            className="mr-2"
                          />
                          Pública
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="tipoEscola"
                            value="Privada"
                            checked={formData.tipoEscola === 'Privada'}
                            onChange={handleInputChange}
                            className="mr-2"
                          />
                          Privada
                        </label>
                      </div>
                    </div>
                    {errors.tipoEscola && <p className="text-red-500 text-xs">{errors.tipoEscola}</p>}
                  </div>
                  {/* Ano de Ingresso na Escola */}
                  <div className="mb-4 flex items-center justify-center w-full space-x-4">
                    <div className="flex flex-col md:flex-row md:items-center md:gap-4 w-full">
                      <label className="text-black flex-shrink-0">Ingresso na Escola:</label>
                      <input
                        type="text"
                        id="anoIngresso"
                        name="anoIngresso"
                        placeholder="aaaa"
                        value={formData.anoIngresso}
                        onChange={handleInputChange}
                        maxLength={4}
                        className="w-full py-2 px-3 disabled:bg-gray-100 disabled:cursor-not-allowed border border-gray-100 rounded-lg bg-gray-300 outline-none focus:outline-none focus:ring-1 focus:ring-gray-400"
                        onFocus={() => errors.anoIngresso && setErrors(prevErrors => ({ ...prevErrors, anoIngresso: undefined }))}
                      />
                      {errors.anoIngresso && <p className="text-red-500 text-xs">{errors.anoIngresso}</p>}
                    </div>
                  </div>
                </div>
                {/* Nível de Escolaridade Atual */}
                <div className="md:mb-7 mb-6">
                  <label className="block mb-1">Nível de Escolaridade Atual:</label>
                  <div className="flex flex-col md:flex md:flex-row gap-2 md:gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="nivelEscolaridadeAtual"
                        value="Ensino Fundamental"
                        checked={formData.nivelEscolaridadeAtual === 'Ensino Fundamental'}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Ensino Fundamental
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="nivelEscolaridadeAtual"
                        value="Ensino Médio"
                        checked={formData.nivelEscolaridadeAtual === 'Ensino Médio'}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Ensino Médio
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="nivelEscolaridadeAtual"
                        value="Ensino Técnico"
                        checked={formData.nivelEscolaridadeAtual === 'Ensino Técnico'}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Ensino Técnico
                    </label>
                  </div>
                  {errors.nivelEscolaridadeAtual && <p className="text-red-500 text-xs">{errors.nivelEscolaridadeAtual}</p>}
                </div>

                {/* Curso Atual */}
                <div className="mb-4">
                  <label className="block mb-1" htmlFor="cursoAtual">Curso Atual:</label>
                  <select
                    id="cursoAtual"
                    name="cursoAtual"
                    value={formData.cursoAtual}
                    onChange={handleInputChange}
                    className="w-full py-2 px-3 border border-gray-100 rounded-lg bg-gray-300 outline-none focus:outline-none focus:ring-1 focus:ring-gray-400"
                  >
                    <option value="">Selecione</option>
                    <optgroup label="Ensino Fundamental">
                      <option value="6° Ano">6° Ano</option>
                      <option value="7° Ano">7° Ano</option>
                      <option value="8° Ano">8° Ano</option>
                      <option value="9° Ano">9° Ano</option>
                    </optgroup>
                    <optgroup label="Ensino Médio">
                      <option value="1° Ano">1° Ano</option>
                      <option value="2° Ano">2° Ano</option>
                      <option value="3° Ano">3° Ano</option>
                    </optgroup>
                  </select>
                  {errors.cursoAtual && <p className="text-red-500 text-xs">{errors.cursoAtual}</p>}
                </div>
                <div className='flex items-center justify-end w-full'>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="next-btn text-center items-center justify-center flex bg-gradient-to-b from-amber-400 to-amber-500 text-black px-8 py-1.5 rounded w-full sm:w-auto"
                  >
                    Próximo
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <div className="mb-4">
                  <input
                    type="number"
                    id="cepAluno"
                    name="cepAluno"
                    placeholder="CEP do Aluno"
                    value={formData.cepAluno}
                    onChange={handleInputChange}
                    className={`w-full py-2 px-3 border border-gray-100 rounded-lg bg-gray-300 outline-none focus:outline-none focus:ring-1 ${errors.cepAluno ? 'border-red-500 focus:ring-red-500' : 'focus:ring-gray-400'}`}
                    onFocus={() => errors.cepAluno && setErrors(prevErrors => ({ ...prevErrors, cepAluno: undefined }))}
                    maxLength={8}
                    pattern="\d*"
                  />
                  {errors.cepAluno && <p className="text-red-500 text-xs">{errors.cepAluno}</p>}
                </div>
                <div className="w-full flex flex-col md:flex-row md:space-x-4">
                  {/* Rua */}
                  <input
                    type="text"
                    id="ruaAluno"
                    name="ruaAluno"
                    placeholder="Rua"
                    value={formData.ruaAluno}
                    onChange={handleInputChange}
                    className="flex-1 pl-3 pr-3 py-2 mb-2 md:mb-7 rounded-lg bg-gray-300 border border-gray-100 outline-none focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder:text-gray-500"
                  />
                  <input
                    type="text"
                    id="numeroAluno"
                    name="numeroAluno"
                    placeholder="Nº"
                    value={formData.numeroAluno}
                    onChange={handleInputChange}
                    className="md:w-24 pl-3 pr-3 py-2 mb-2 md:mb-7 rounded-lg bg-gray-300 border border-gray-100 outline-none focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder:text-gray-500"
                    onFocus={() => errors.numeroAluno && setErrors(prevErrors => ({ ...prevErrors, numeroAluno: undefined }))}
                  />
                  {errors.numeroAluno && <p className="text-red-500 text-xs">{errors.numeroAluno}</p>}
                </div>
                <div className="w-full flex flex-col md:flex-row md:space-x-4">
                  {/* Complemento */}
                  <input
                    type="text"
                    id="complementoAluno"
                    name="complementoAluno"
                    placeholder="Complemento"
                    value={formData.complementoAluno}
                    onChange={handleInputChange}
                    className="flex-1 pl-3 pr-3 py-2 mb-2 md:mb-7 rounded-lg bg-gray-300 border border-gray-100 outline-none focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder:text-gray-500"
                  />
                  <input
                    type="text"
                    id="bairroAluno"
                    name="bairroAluno"
                    placeholder="Bairro"
                    value={formData.bairroAluno}
                    onChange={handleInputChange}
                    className="flex-1 pl-3 pr-3 py-2 mb-2 md:mb-7 rounded-lg bg-gray-300 border border-gray-100 outline-none focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder:text-gray-500"
                  />
                </div>
                <div className='w-full flex flex-col md:flex-row md:space-x-4'>
                  <input
                    type="text"
                    id="cidadeAluno"
                    name="cidadeAluno"
                    placeholder="Cidade"
                    value={formData.cidadeAluno}
                    onChange={handleInputChange}
                    className="flex-1 pl-3 pr-3 py-2 mb-2 md:mb-7 rounded-lg bg-gray-300 border border-gray-100 outline-none focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder:text-gray-500"
                  />
                  <select
                    id="estadoAluno"
                    name="estadoAluno"
                    value={formData.estadoAluno}
                    onChange={handleInputChange}
                    className="md:w-1/3 pl-3 pr-3 py-2 mb-2 md:mb-7 rounded-lg bg-gray-300 border border-gray-100 outline-none focus:outline-none focus:ring-1 focus:ring-gray-400"
                  >
                    <option value="" disabled>Estado</option> {/* Opção padrão com valor vazio, desabilitada para que não possa ser selecionada */}
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                  </select>
                </div>
                <div className='flex items-center justify-end w-full'>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="next-btn text-center items-center justify-center flex bg-gradient-to-b from-amber-400 to-amber-500 text-black px-8 py-1.5 rounded w-full sm:w-auto"
                  >
                    Próximo
                  </button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <div className="md:mb-14 mb-2">
                  <input
                    type="password"
                    id="senhaAtual"
                    name="senhaAtual"
                    placeholder="Senha atual"
                    value={formData.senhaAtual}
                    onChange={handleInputChange}
                    className="w-full pl-3 pr-3 py-2 rounded-lg bg-gray-300 border border-gray-100 outline-none focus:outline-none focus:ring-1 focus:ring-gray-500 placeholder:text-gray-400"
                    onFocus={() => errors.senhaAtual && setErrors(prevErrors => ({ ...prevErrors, senhaAtual: undefined }))}
                  />
                  {errors.senhaAtual && <p className="text-red-500 text-xs">{errors.senhaAtual}</p>}
                </div>
                <div className="md:mb-4 mb-2">
                  <input
                    type="password"
                    id="novaSenha"
                    name="novaSenha"
                    placeholder="Nova Senha"
                    value={formData.novaSenha}
                    onChange={handleInputChange}
                    className="w-full pl-3 pr-3 py-2 rounded-lg bg-gray-300 border border-gray-100 outline-none focus:outline-none focus:ring-1 focus:ring-gray-500 placeholder:text-gray-400"
                    onFocus={() => errors.novaSenha && setErrors(prevErrors => ({ ...prevErrors, novaSenha: undefined }))}
                  />
                  {errors.novaSenha && <p className="text-red-500 text-xs">{errors.novaSenha}</p>}
                </div>
                <div className="md:mb-7 mb-2">
                  <input
                    type="password"
                    id="confirmarNovaSenha"
                    name="confirmarNovaSenha"
                    placeholder="Confirme a Nova Senha"
                    value={formData.confirmarNovaSenha}
                    onChange={handleInputChange}
                    className="w-full pl-3 pr-3 py-2 rounded-lg bg-gray-300 border border-gray-100 outline-none focus:outline-none focus:ring-1 focus:ring-gray-500 placeholder:text-gray-400"
                    onFocus={() => errors.confirmarNovaSenha && setErrors(prevErrors => ({ ...prevErrors, confirmarNovaSenha: undefined }))}
                  />
                  {errors.confirmarNovaSenha && <p className="text-red-500 text-xs">{errors.confirmarNovaSenha}</p>}
                </div>
                <div className='flex items-center justify-end w-full'>
                  <button
                    type="submit"
                    className="next-btn text-center items-center justify-center flex bg-gradient-to-b from-amber-400 to-amber-500 text-black px-8 py-1.5 rounded w-full sm:w-auto"
                  >
                    Salvar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
      />
    </div>
  );
};
