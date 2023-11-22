'use client'

import { useState, useEffect, FormEvent } from 'react';
import Test from '@/svg/Performance'; // SVG 파일 직접 가져오기
import Image from 'next/image'
import Logo from '@/../public/image/haion.jpeg'
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';
import axios from 'axios';



const Login: React.FC = () => {
    const [loginStatus, setLoginStatus] = useState<'idle' | 'loading' | 'success' | 'failed'>('idle');
    const router = useRouter();

    // 로그인 API 응답 인터페이스
    interface LoginApiResponse {
        success: boolean;
    }

    // 로그인 API 호출 함수
    const loginApi = async (email: string, password: string): Promise<LoginApiResponse> => {
        // 로그인 API 요청 함수
        const loginApi = async (email: string, password: string) => {
            try {
                const response = await axios.post('/api/login', { email, password });
                return response.data; // API 응답 데이터 반환
            } catch (error) {
                console.error('Login API error:', error);
                return { success: false }; // 에러 발생 시 실패 응답 반환
            }
        };
    };

    // 폼 제출 처리 함수
    const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const email = formData.get('email') as string; // as string으로 타입 단언
        const password = formData.get('password') as string;

        setLoginStatus('loading');
        const result = await loginApi(email, password);

        if (result.success) {
            setLoginStatus('success');
        } else {
            setLoginStatus('failed');
        }
    };

    useEffect(() => {
        if (loginStatus === 'success') {
            router.push('/main');
        }
    }, [loginStatus, router]);



    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <Image src={Logo} alt="Picture of the author" />
                            <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CompanyID</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">임직원ID</label>
                                    <input type="" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">비밀번호</label>
                                    <input type="password" name="password" id="password" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label className="text-gray-500 dark:text-gray-300">회원정보 기억하기</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline hover:animate-pulse dark:text-primary-500">비밀번호 찾기</a>
                                </div>
                                <div className='grid justify-items-stretch'>
                                    <a href="#" className="justify-self-end font-medium text-sm font-medium text-primary-600 hover:underline hover:animate-pulse dark:text-primary-500">회원가입 </a>
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-blue-700 dark:focus:ring-blue-800">로그인</button>
                                <hr />

                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    하이온넷(주) | 서울특별시 구로구 디지털로288 대륭포스트타워1차 607호 | 대표전화 : 02)1588-1456
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
        </>
    );
}

export default Login;
